'use client'

import React, { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CodeHighlight from "@/components/CodeHighlight"
import componentRegistry from '@/registry'
import ComponentWrapper from './component-wrapper'
import { ImSpinner } from "react-icons/im"
import { readFileContent } from '@/lib/fileReader'


const ComponentPreview = ({ name, scale, width, height, ...props }: {
  name: string,
  scale?: number,
  height?: string,
  width?: string,
  [key: string]: any
}) => {
  const [code, setCode] = useState<string>('')
  const componentEntry = componentRegistry[name]

  useEffect(() => {
    if (componentEntry) {
      readFileContent(componentEntry.filePath)
        .then(content => {
          setCode(content)
        })
        .catch(error => console.error('Error fetching component code:', error))
    }
  }, [componentEntry])

  if (!componentEntry) {
    return <div>Component not found</div>
  }

  const { component: Component } = componentEntry

  return (
    <div className='relative my-4 flex flex-col space-y-2 lg:max-w-[120ch] overflow-auto'>
      <Tabs defaultValue="preview" className="">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="relative rounded-md h-[46rem]" >
          <ComponentWrapper scale={scale} width={width} height={height}>
            <React.Suspense
              fallback={
                <div className="flex items-center text-sm text-muted-foreground">
                  <ImSpinner className="mr-2 size-4 animate-spin" />
                  Loading...
                </div>
              }
            >
              <div className='scale-[60%] bg-background'>
                <Component {...props} />
              </div>
            </React.Suspense>
          </ComponentWrapper>
        </TabsContent>

        <TabsContent
          value="code"
          className="w-96 md:w-[800px] ml-10 rounded-sm "
        >
          {code ? (
            <CodeHighlight code={code} />
          ) : (
            <div className="flex items-center text-sm text-muted-foreground">
              <ImSpinner className="mr-2 size-4 animate-spin" />
              Loading code...
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ComponentPreview

export function generateStaticParams() {
  return Object.keys(componentRegistry).map((slug) => ({ slug }))
}