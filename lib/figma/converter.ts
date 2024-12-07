import { FigmaNode, FigmaDesign, ConversionOptions } from './types';

export class FigmaConverter {
  private design: FigmaDesign;
  private options: ConversionOptions;

  constructor(design: FigmaDesign, options: ConversionOptions) {
    this.design = design;
    this.options = options;
  }

  private convertNodeToJSX(node: FigmaNode): string {
    const componentName = this.formatComponentName(node.name);
    const styles = this.convertStylesToTailwind(node.styles || {});
    
    return `
      ${this.options.typescript ? 'import React from "react";' : ''}
      
      ${this.options.typescript ? 'interface Props {}' : ''}
      
      export ${this.options.typescript ? 'const' : 'function'} ${componentName} = (${this.options.typescript ? 'props: Props' : 'props'}) => {
        return (
          <div className="${styles}">
            ${node.children?.map(child => this.convertNodeToJSX(child)).join('\n') || ''}
          </div>
        );
      }
      
      ${!this.options.typescript ? `export default ${componentName};` : ''}
    `;
  }

  private formatComponentName(name: string): string {
    return name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
  }

  private convertStylesToTailwind(styles: Record<string, string>): string {
    const tailwindClasses: string[] = [];

    // Convert common Figma styles to Tailwind classes
    if (styles.backgroundColor) {
      tailwindClasses.push('bg-[${styles.backgroundColor}]');
    }
    if (styles.width) {
      tailwindClasses.push('w-[${styles.width}px]');
    }
    if (styles.height) {
      tailwindClasses.push('h-[${styles.height}px]');
    }
    
    return tailwindClasses.join(' ');
  }

  public convert(): void {
    const components = Object.values(this.design.components).map(component =>
      this.convertNodeToJSX(component)
    );
    
    // TODO: Write components to files in outputDir
    console.log('Generated components:', components);
  }
}