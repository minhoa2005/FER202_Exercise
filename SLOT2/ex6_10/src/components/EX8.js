import React from 'react'
import { Button, Dropdown, DropdownButton, FormCheck, FormControl, FormLabel, FormSelect, InputGroup } from 'react-bootstrap';

export default function EX8() {
    return (
        <div className="container">
            <h1>Form đặt vé máy bay</h1>
            <FormLabel>Họ Tên</FormLabel>
            <InputGroup>
                <FormControl type="text" placeholder="Nhập họ tên" />
                <InputGroup.Text>vnđ  </InputGroup.Text>
            </InputGroup>
            <p>Phải nhập 5 ký tự, in hoa...</p>
            <FormLabel className="mt-3">Địa chỉ</FormLabel>
            <FormControl type="text" placeholder="Nhập địa chỉ" />
            <p>Phải nhập 5 ký tự, in hoa...</p>
            <div className="mt-3 d-flex ">
                <div style={{ "flex": 1 }} className="me-3">
                    <FormLabel>Đi từ</FormLabel>
                    <FormSelect>
                        <option>Ha Noi</option>
                    </FormSelect>
                </div>
                <div style={{ "flex": 1 }}>
                    <FormLabel>Đến</FormLabel>
                    <FormSelect>
                        <option>Ha Noi</option>
                    </FormSelect>
                </div>
            </div>
            <div className="mt-3">
                <p>Chọn chiều đi (Khứ hồi)</p>
                <div className="d-flex align-items-center gap-3">
                    <FormCheck type="radio" />
                    <FormLabel className="mb-0">Đi</FormLabel>
                </div>
                <div className="d-flex align-items-center gap-3">
                    <FormCheck type="radio" />
                    <FormLabel className="mb-0">Về</FormLabel>
                </div>
            </div>
            <Button variant="primary" className="w-100 mt-3">Đặt vé</Button>
        </div>
    )
}
