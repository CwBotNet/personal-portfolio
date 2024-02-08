import ProjectsTable from '@/components/dashboard/projectsTable'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

const projectPage = () => {
  return (
    <>
      <div className='p-8 w-full h-screen '>
        <Card className='col-span-4 rounded-2xl border-white/20 bg-gray-800/45'>
          <CardHeader>
            <CardTitle className='text-center'>Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <ProjectsTable />
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default projectPage