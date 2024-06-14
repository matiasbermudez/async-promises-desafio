import * as jsonfile from "jsonfile";

class Contact {
  constructor(id: number, name: string) {
    this.id = id,
      this.name = name
  }
  id?: number = undefined;
  name: string = "";
}


class ContactsCollection {
  data: Contact[] = [];
  load() {
    // usar la version Async (readFile)

    const promesa = jsonfile.readFile(__dirname + "/contacts.json")
      promesa.then(res => {
        this.data = res
      })
      promesa.catch(error => console.error(error));
      return promesa
  }
  getAll() {
    return this.data;
  }
  addOne(contact: Contact) {
    this.data.push(contact);
  }
  save() {
    // usar la version Async (writeFIle)
    jsonfile.writeFile(__dirname + "/contacts.json", this.data)
      .then(res => {
        console.log("Escritura Exitosa")
      })
      .catch(error => console.error("Fallo: ", error))
  }
  getOneById(id) {
    const encontrado = this.data.find((contacto) => {
      if (contacto?.id == id) {
        return true;
      }
    });

    return encontrado;
  }
}

export { ContactsCollection, Contact };
