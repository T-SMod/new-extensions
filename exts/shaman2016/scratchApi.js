// Name: Scratch Api
// ID: ScratchApi8787
// Description: An extension for interacting with the Scratch Api.
// By: Shaman2016 <https://scratch.mit.edu/users/Shaman2016/>
// License: MIT
(function (Scratch) {
    "use strict";

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("This Extension must run unsandboxed");
  }

    class ScratchApi {
      getInfo() {
        return {
          id: "Scratch Api",
          name: "ScratchApi8787",
          color1: "#a3c0e1",
          blocks: [
            {
              opcode: "GetUser",
              blockType: Scratch.BlockType.OBJECT,
              text: "get user object [user]",
              arguments: {
                user: {
                  defaultValue: "griffpatch",
                  type: Scratch.ArgumentType.STRING,
                },
              },
            },
            {
              opcode: "GetProject",
              blockType: Scratch.BlockType.OBJECT,
              text: "get project object [id]",
              arguments: {
                id: {
                  defaultValue: "612229554",
                  type: Scratch.ArgumentType.STRING,
                },
              },
            },
            {
              opcode: "GetStudio",
              blockType: Scratch.BlockType.OBJECT,
              text: "get studio object [id]",
              arguments: {
                id: {
                  defaultValue: "36416387",
                  type: Scratch.ArgumentType.STRING,
                },
              },
            },
          ],
        };
      }
async GetUser(args) {
  return fetch(`https://shaman2016-trampline.vercel.app/scratch/users/${args.user}/`)
}
async GetProject(args) {
  return fetch(`https://shaman2016-trampline.vercel.app/scratch/projects/${args.id}/`)
}
async GetStudio(args) {
  return fetch(`https://shaman2016-trampline.vercel.app/scratch/studios/${args.id}/`)
}
    }
    Scratch.extensions.register(new ScratchApi());
  })(Scratch);
