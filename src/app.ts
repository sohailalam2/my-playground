const app = document.getElementById('app') as HTMLElement;

export function printOnDOM(template: string): void {
  app.innerHTML += template;
}

export function printOnDOMCommandResult(command: string, result: unknown): void {
  printOnDOM(`<p><span style="color: #C21F39">${command}</span> => ${result}</p>`);
}
