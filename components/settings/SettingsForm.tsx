'use client';

import { motion } from 'framer-motion';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface SettingsFormProps {
  isTypescript: boolean;
  setIsTypescript: (value: boolean) => void;
  framework: 'react' | 'nextjs';
  setFramework: (value: 'react' | 'nextjs') => void;
  styling: 'tailwind' | 'css';
  setStyling: (value: 'tailwind' | 'css') => void;
}

export function SettingsForm({
  isTypescript,
  setIsTypescript,
  framework,
  setFramework,
  styling,
  setStyling,
}: SettingsFormProps) {
  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label htmlFor="typescript" className="text-base">TypeScript</Label>
          <Switch
            id="typescript"
            checked={isTypescript}
            onCheckedChange={setIsTypescript}
          />
        </div>

        <div className="space-y-2">
          <Label className="text-base">Framework</Label>
          <RadioGroup
            value={framework}
            onValueChange={(value: 'react' | 'nextjs') => setFramework(value)}
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="react" id="react" />
              <Label htmlFor="react">React</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="nextjs" id="nextjs" />
              <Label htmlFor="nextjs">Next.js</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <Label className="text-base">Styling</Label>
          <RadioGroup
            value={styling}
            onValueChange={(value: 'tailwind' | 'css') => setStyling(value)}
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="tailwind" id="tailwind" />
              <Label htmlFor="tailwind">Tailwind CSS</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="css" id="css" />
              <Label htmlFor="css">CSS Modules</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
    </motion.div>
  );
}