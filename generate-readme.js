const fs = require("fs");
const path = require("path");

// Имя выходного файла
const outputFile = "README.md";

// Список исключений
const ignoreDirs = new Set([
  ".git",
  "node_modules",
  ".idea",
  "dist",
  "build",
  ".next",
  "coverage",
]);
const ignoreFiles = new Set(["generateReadme.js", "README.md", ".DS_Store"]);

// Функция для рекурсивного обхода директорий
function getFilesRecursively(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      // Если директория не в списке игнорируемых, заходим в неё
      if (!ignoreDirs.has(file)) {
        getFilesRecursively(fullPath, fileList);
      }
    } else {
      // Если файл не в списке игнорируемых, добавляем его
      if (!ignoreFiles.has(file)) {
        // Получаем относительный путь от корня проекта
        const relativePath = path.relative(process.cwd(), fullPath);
        // Заменяем обратные слеши на прямые (для корректных ссылок в Git)
        const normalizedPath = relativePath.split(path.sep).join("/");

        fileList.push(normalizedPath);
      }
    }
  });

  return fileList;
}

// Основная функция
function generateReadme() {
  try {
    const allFiles = getFilesRecursively(".");

    let content = "# Project Structure\n\n";

    const dirs = allFiles.reduce((res, filepath) => {
      const dir = path.dirname(filepath);
      res[dir] = res[dir] || [];
      res[dir].push(filepath);
      return res;
    }, {});

    Object.entries(dirs).forEach(([dir, files]) => {
      content += `## ${dir}\n`;
      content += files
        .map((file) => {
          const name = path.basename(file);
          return `- [${name}](./${file})\n`;
        })
        .join("");
      content += "\n";
    });

    // allFiles.forEach((filePath) => {
    //   const
    //   // Создаем Markdown ссылку: [путь/к/файлу](путь/к/файлу)
    //   content += `- [\`${filePath}\`](${filePath})\n`;
    // });

    fs.writeFileSync(outputFile, content, "utf-8");
    console.log(`Успешно! Файл '${outputFile}' был создан.`);
  } catch (error) {
    console.error("Произошла ошибка:", error);
  }
}

generateReadme();
