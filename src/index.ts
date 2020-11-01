import Realm from "realm";
import { EntryField } from "./definition/realm";
import { writeDictionaryToRealm } from "./helper/write-dictionary-to-realm";

const Entry = {
  name: "Entry",
  primaryKey: "id",
  properties: {
    id: "int",
    xml: "string",
    word: { type: "string", indexed: true },
    word_grades: "string[]",
    [EntryField.englishTranslationWord]: { type: "string[]" },
    [EntryField.japaneseTranslationWord]: { type: "string[]" },
    [EntryField.frenchTranslationWord]: { type: "string[]" },
    [EntryField.spanishTranslationWord]: { type: "string[]" },
    [EntryField.arabicTranslationWord]: { type: "string[]" },
    [EntryField.mongolianTranslationWord]: { type: "string[]" },
    [EntryField.vietnameseTranslationWord]: { type: "string[]" },
    [EntryField.thaiTranslationWord]: { type: "string[]" },
    [EntryField.indonesianTranslationWord]: { type: "string[]" },
    [EntryField.russianTranslationWord]: { type: "string[]" },
  },
};

async function run() {
  const realm = await Realm.open({ schema: [Entry] });
  await writeDictionaryToRealm(realm);
  console.log("done");

  const entries = realm.objects("Entry");
  console.log("entries", entries);
}

run();
