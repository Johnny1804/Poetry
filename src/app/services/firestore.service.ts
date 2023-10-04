import { Injectable, inject } from '@angular/core'
import { Poem } from '../model/Poem'
import { Firestore, collection, deleteDoc, addDoc, CollectionReference, updateDoc, doc, query, getDocs, where} from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  private firestore: Firestore
  private poemCollection: CollectionReference
  private collectionName: string

  constructor() {
      this.firestore = inject(Firestore)
      this.collectionName = 'poems'
      this.poemCollection = collection(this.firestore, this.collectionName)
  }

  async getAllPoems(): Promise<Array<Poem>> {
    const poemsList = new Array <Poem>
    const quer = query(this.poemCollection)
    const querySnapshot = await getDocs(quer)

    querySnapshot.forEach((doc) => {
      poemsList.push({id: doc.id, title: doc.get("title"), author: doc.get("author"), text: doc.get("text"), isEditable: true})
    })
    
    return poemsList
  }

  async getPoemWithTitle(title: string): Promise<Poem> {
    let poem =  new Poem('', '', [])
    const quer = query(this.poemCollection, where("title", "==", title));
    const querySnapshot = await getDocs(quer);

    querySnapshot.forEach((doc) => {
      poem = {id: doc.id, title: doc.get("title"), author: doc.get("author"), text: doc.get("text"), isEditable: true}
    })

    return poem
  }

  async poemWithTitleExist(title: string): Promise <boolean> {
    let poem =  new Poem('', '', [])
    const quer = query(this.poemCollection, where("title", "==", title));
    const querySnapshot = await getDocs(quer);

    querySnapshot.forEach((doc) => {
      poem = {id: doc.id, title: doc.get("title"), author: doc.get("author"), text: doc.get("text"), isEditable: true}
    })

    if (poem.title != undefined) return true
    else return false
  }

  addNewPoem(poem: Poem) {
    const poemFields = {
      title: poem.title,
      author: poem.author,
      text: poem.text
    }

    addDoc(this.poemCollection, poemFields)
  }
 
  editPoem(poem: Poem) {
    const updatedFields = {
      title: poem.title,
      author: poem.author,
      text: poem.text
    }
    const docRef = doc(this.firestore, this.collectionName, poem.id as string);

    updateDoc(docRef, updatedFields)
  }
  
  removePoem(poem: Poem) {
    const docRef = doc(this.firestore, this.collectionName, poem.id as string);

    deleteDoc(docRef)
  }
}
