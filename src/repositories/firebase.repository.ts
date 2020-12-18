import firebase from '@/config/firebase';

export default class FirebaseRepository {
    getImage(url: string): Promise<any> {
        return firebase.storage().ref(url).getDownloadURL();
    }

    async uploadImage(file : any, id : number): Promise<any> {
        const storageRef = await firebase.storage().ref(`products/${id}/${file.name}`).put(file);
    }

    async updateImage(oldFile : any, newFile : any, id : number): Promise<any> {
        firebase
            .storage()
            .ref(`products/${id}/${oldFile}`)
            .delete()
            .then(async () => {
                await firebase.storage().ref(`products/${id}/${newFile.name}`).put(newFile);
            })
            .catch((er) => {
                // console.log(er);
            });
    }
}
