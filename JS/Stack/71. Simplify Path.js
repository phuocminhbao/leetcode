/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = (path) => {
    const simplifiedCanonicalPath = [];
    const filesOrDirectories = path.split("/");
    filesOrDirectories.forEach((item) => {
        if (["", "."].includes(item)) {
            return;
        }
        if (item === "..") {
            simplifiedCanonicalPath.pop();
            return;
        }
        simplifiedCanonicalPath.push(item);
    });
    return `/${simplifiedCanonicalPath.join("/")}`;
};

const path = ".";
console.log(simplifyPath(path));
