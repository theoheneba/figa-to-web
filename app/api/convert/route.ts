'use client';

import { NextResponse } from 'next/server';
import { FigmaConverter } from '@/lib/figma/converter';
import type { FigmaDesign, ConversionOptions } from '@/lib/figma/types';

export async function POST(request: Request) {
  try {
    const { design, options } = await request.json() as {
      design: FigmaDesign;
      options: ConversionOptions;
    };

    const converter = new FigmaConverter(design, options);
    converter.convert();

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Conversion error:', error);
    return NextResponse.json(
      { error: 'Failed to convert Figma design' },
      { status: 500 }
    );
  }
}