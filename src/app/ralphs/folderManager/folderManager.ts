import { IFolderManager } from './interfaces';
const fs = require("fs");
const fsPromises = fs.promises;


const folderManager:IFolderManager = Object.create(null);

folderManager.createFolder = async function (dir) {
    try {
        await fsPromises.access(dir, fs.constants.F_OK);
    } catch (e) {
        await fsPromises.mkdir(dir);
    }
};

folderManager.run = async function (dir) {
    await this.createFolder(dir);
    const blog = `${dir}/blog`;
    await this.createFolder(blog);
    const hazards = `${dir}/hazards`;
    await this.createFolder(hazards);
    const cases = `${dir}/cases`;
    await this.createFolder(cases);
    const catalog = `${dir}/catalog`;
    await this.createFolder(catalog);
};


export default folderManager;