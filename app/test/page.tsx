'use client'

import Form from '@/components/Form'
import { SchemaInputType } from '@/schemas/loginSchema'
import { SubmitHandler } from 'react-hook-form'
import { Schema } from '@/schemas/loginSchema'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useTranslation } from '@/i18n/client'
function Page() {
  const { i18n, t } = useTranslation('common')
  const onSubmit: SubmitHandler<SchemaInputType> = async data => {
    const formData = new FormData()

    for (const field of Object.keys(data) as Array<keyof typeof data>) {
      formData.append(`${field}`, `${data[field]}`)
    }

    await fetch('/api/v1/form', { method: 'POST', body: formData })
  }
  return (
    <div className='flex justify-center'>
      <Card className='w-[350px] '>
        <CardHeader className='pb-1'>
          <CardTitle>{t('login.login')}</CardTitle>
          <CardDescription>{t('login.subtitle')}</CardDescription>
        </CardHeader>
        <CardContent className='p-0'>
          <Form
            schema={Schema}
            onSubmit={onSubmit}
            //className='grid grid-cols-1 gap-1 sm:grid-cols-2 lg:max-w-screen-lg lg:grid-cols-4'
            className='mt-2  rounded-md p-4 pt-2'
          ></Form>
        </CardContent>
      </Card>
    </div>
  )
}

export default Page
