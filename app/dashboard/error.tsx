"use client"

import React from 'react'

type Props = {}

const ErrorBoundary = ({ error }: { error: Error }) => {
    return (
        <div>{error.message}</div>
    )
}


export default ErrorBoundary;