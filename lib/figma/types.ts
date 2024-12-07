export interface FigmaNode {
  id: string;
  name: string;
  type: string;
  children?: FigmaNode[];
  styles?: Record<string, string>;
  absoluteBoundingBox?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
  fills?: any[];
  strokes?: any[];
  effects?: any[];
}

export interface FigmaDesign {
  document: FigmaNode;
  components: Record<string, FigmaNode>;
  styles: Record<string, any>;
}

export interface ConversionOptions {
  framework: 'react' | 'nextjs';
  typescript: boolean;
  styling: 'tailwind' | 'css';
  outputDir: string;
}