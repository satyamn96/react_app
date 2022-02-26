import React from 'react'
import { Button ,Alert } from 'react-bootstrap';
export default function Bootstrap() {
    return (
        <>
            <div className="app">
                <h1> Bootstrap In React</h1>
                <div className="mx-0">
                    <Button onClick={() => alert("Hello Bootstrap")} variant="primary">Button #1</Button>
                    <Button variant="dark my-2 mx-2">Dark</Button>
                </div>
                <div>
                    {
                        [
                            'primary',
                            'secondary',
                            'success',
                            'danger',
                            'warning',
                            'info',
                            'light',
                            'dark',
                          ].map((variant, idx) => (
                            <Alert key={idx} variant={variant}>
                              This is a {variant} alert—check it out!
                            </Alert>
                          ))
                    }
                </div>
            </div>
        </>
    )
}
