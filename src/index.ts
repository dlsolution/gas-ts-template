import { SheetService } from "./SheetService";

function createNewFile() {
  const ss = SheetService.createInitialFile("New file");
  ss.getRange("A2").setValue("Happy gas!");
}

export { createNewFile };
