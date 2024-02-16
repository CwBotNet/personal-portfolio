import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

const AboutSection = () => {
    return (
        <div id="about" className='md:h-screen'>
            <Card>
                <CardHeader>
                    <CardTitle className='text-center'>
                        About me
                    </CardTitle>
                </CardHeader>

                <CardContent className='flex md:flex-col flex-wrap gap-4'>
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Education
                            </CardTitle>
                        </CardHeader>
                        <CardContent>

                        </CardContent>
                    </Card>

                    {/*  */}
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                Skills
                            </CardTitle>
                        </CardHeader>
                        <CardContent>

                        </CardContent>
                    </Card>

                    {/*  */}
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                certification
                            </CardTitle>
                        </CardHeader>
                        <CardContent>

                        </CardContent>
                    </Card>
                </CardContent>
            </Card>

            {/*  */}

        </div>
    )
}

export default AboutSection
