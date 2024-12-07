'use client';

import { useState } from 'react';
import { Upload, Settings, Code2, ArrowRight, Palette } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SettingsForm } from '@/components/settings/SettingsForm';

export default function Home() {
  const [isTypescript, setIsTypescript] = useState(true);
  const [framework, setFramework] = useState<'react' | 'nextjs'>('nextjs');
  const [styling, setStyling] = useState<'tailwind' | 'css'>('tailwind');
  const [fileName, setFileName] = useState<string>('');
  const [activeTab, setActiveTab] = useState('upload');

  const { scrollYProgress } = useScroll();
  const rotateX = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 360]);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setFileName(file.name);
  };

  return (
    <div className="min-h-screen gradient-bg">
      <div className="max-w-5xl mx-auto p-8 space-y-8 perspective-container">
        <Header />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="border-2 card-3d glass-effect rainbow-border">
            <Tabs defaultValue="upload" className="w-full" value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full p-1 grid grid-cols-3 gap-2 bg-muted/50">
                {['upload', 'settings', 'preview'].map((tab) => (
                  <TabsTrigger
                    key={tab}
                    value={tab}
                    className="data-[state=active]:bg-background/80 data-[state=active]:scale-105 transition-all duration-300"
                  >
                    {tab === 'upload' && <Upload className="w-4 h-4 mr-2" />}
                    {tab === 'settings' && <Settings className="w-4 h-4 mr-2" />}
                    {tab === 'preview' && <Code2 className="w-4 h-4 mr-2" />}
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value="upload" className="p-6">
                <motion.div 
                  className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-12 bg-muted/5"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <input
                    type="file"
                    accept=".json"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="figma-upload"
                  />
                  <label htmlFor="figma-upload" className="cursor-pointer">
                    <div className="flex flex-col items-center space-y-4">
                      <motion.div 
                        className="p-4 bg-primary/5 rounded-full glow"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity
                        }}
                      >
                        <Upload className="w-8 h-8 text-primary" />
                      </motion.div>
                      <Button size="lg" className="font-semibold">
                        Choose Figma Export
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      {fileName && (
                        <Badge variant="secondary" className="mt-2">
                          {fileName}
                        </Badge>
                      )}
                    </div>
                  </label>
                </motion.div>
              </TabsContent>

              <TabsContent value="settings" className="p-6">
                <SettingsForm
                  isTypescript={isTypescript}
                  setIsTypescript={setIsTypescript}
                  framework={framework}
                  setFramework={setFramework}
                  styling={styling}
                  setStyling={setStyling}
                />
              </TabsContent>

              <TabsContent value="preview" className="p-6">
                <motion.div 
                  className="h-[500px] flex flex-col items-center justify-center border rounded-lg bg-muted/5"
                  style={{ rotateX, rotateY }}
                >
                  <Palette className="w-12 h-12 text-muted-foreground floating" />
                  <p className="text-muted-foreground text-center max-w-md mt-4">
                    Component preview will appear here after conversion
                  </p>
                </motion.div>
              </TabsContent>
            </Tabs>
          </Card>
        </motion.div>

        <Footer />
      </div>
    </div>
  );
}