import React from 'react'

export default function EX9() {
    return (
        <div>
            <div className="container mt-3 d-flex gap-3 border p-3">
                <img src="Logo_FPT_Education.png" alt="FPT LOGO" style={{ width: '200px', flex: 1 }} />
                <div className="text-center" style={{ flex: 2 }}>
                    <p className="fw-bold mb-0">Hoai Nguyen - FPT DA NANG</p>
                    <p className="mb-0">Mobile: 0987654321</p>
                </div>
            </div>
            <div>
                <div
                    className="d-flex flex-column justify-content-center align-items-center gap-3 mt-3"
                    style={{
                        height: "300px",
                        backgroundColor: "orange",
                    }}
                >
                    <img
                        src="/Logo_FPT_Education.png"
                        alt="FPT Education Logo"
                        className="bg-white p-4 img-fluid"
                        style={{
                            width: "400px",
                        }}
                    />

                    <div className="d-flex justify-content-center align-items-center gap-4">
                        <p className="text-white mb-0">Home</p>
                        <p className="text-white mb-0">About</p>
                        <p className="text-white mb-0">Contact</p>
                    </div>
                </div>

                <div className="text-center py-4">
                    <h1>About</h1>
                    <p>This is the about section.</p>

                    <h1>Contact</h1>
                    <p>This is the contact section.</p>
                </div>

                <div
                    className="d-flex flex-column justify-content-center align-items-center"
                    style={{
                        backgroundColor: "#ECC57E",
                        height: "150px",
                    }}
                >
                    <p className="mb-0">@2023 FPT Education. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}
