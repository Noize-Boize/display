/*
  This class defines a custom model for a saved project from the sequencer sampler.
*/

export class File {

  public id: string;

  public fileName: string;

  public owner: string;

  public pattern: string;

  public sounds: string;

  constructor(fileName,owner,pattern,sounds)
  {
    this.fileName = fileName;
    this.owner = owner;
    this.pattern = pattern;
    this.sounds = sounds;
  }


}
