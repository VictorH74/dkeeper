import List "mo:base/List";
import Debug "mo:base/Debug";

actor Dkeeper {

  // Data type
  public type Note = {
    title: Text;
    content: Text;
  };

  stable var notes: List.List<Note> = List.nil<Note>();

  //  CRUD

  public func createNote(titleText: Text, contentText: Text){

    let newNote: Note = {
      title = titleText;
      content = contentText;
    };

    notes := List.push(newNote, notes);
  };

  public func removeNote(id: Nat) {
    
    let provList: List.List<Note> = List.take(notes, id);
    let provList2: List.List<Note> = List.drop(notes, id + 1);
    notes := List.append(provList, provList2);

  };

  public query func readNotes() : async [Note] {
    return List.toArray<Note>(notes);
  };
}