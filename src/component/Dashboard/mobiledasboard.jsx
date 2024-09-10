import React, { useState } from 'react';
import '../Dashboard/mobile.css';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField'; // Import TextField from MUI

function Mobiledasboard() {
  const orders = [
    { id: 70443, date: '20/2/2567', customer: 'สมนึก ใจดี', idCard: '110140150001', licenseNumber: '52003001', approvalDate: '7 กันยายน 2556', registrar: 'กรุงเทพฯ', licenseType: 'รถยนต์ส่วนบุคคล', status: 'รอการชำระ', color: 'orange' },
    { id: 39235, date: '26/2/2567', customer: 'สมหมาย ใจเย็น', idCard: '110140150002', licenseNumber: '52003002', approvalDate: '15 กันยายน 2556', registrar: 'เชียงใหม่', licenseType: 'รถจักรยานยนต์', status: 'ยกเลิกการชำระ', color: 'red' },
    { id: 13671, date: '10/2/2567', customer: 'สมบอย ดวงแข', idCard: '110140150003', licenseNumber: '52003003', approvalDate: '10 กันยายน 2556', registrar: 'ขอนแก่น', licenseType: 'รถยนต์บรรทุก', status: 'ชำระสำเร็จ', color: 'green' },
  ];

  const [selectedOrder, setSelectedOrder] = useState(orders[0]);

  const [searchTerm, setSearchTerm] = useState('');
  const [startDate, setStartDate] = useState(null); // วันที่เริ่มต้น
  const [endDate, setEndDate] = useState(null); // วันที่สิ้นสุด

  const filteredOrders = orders.filter(order =>
    order.customer.includes(searchTerm) ||
    order.id.toString().includes(searchTerm) ||
    (startDate && dayjs(order.date, 'D/M/YYYY').isSame(startDate, 'day')) ||
    (endDate && dayjs(order.date, 'D/M/YYYY').isSame(endDate, 'day'))
  );

  return (
    <>
      <div className='details'>
        <h4>ข้อมูลผู้ขับขี่ / การแจ้งข้อหากับผู้กระทำความผิด</h4>
      </div>

      <div className="container-mobile">

        <div className="info-box">
          <h4>ข้อมูลเจ้าของรถ/ผู้ครอบครอง</h4>
          <div className="info-row">
            <strong>เลขที่ใบสั่ง :</strong> <span>{selectedOrder.id}</span>
          </div>
          <div className="info-row">
            <strong>ชื่อผู้ขับขี่ :</strong> <span>{selectedOrder.customer}</span>
          </div>
          <div className="info-row">
            <strong>เลขบัตรประชาชน :</strong> <span>{selectedOrder.idCard}</span>
          </div>
          <div className="info-row">
            <strong>ใบอนุญาตขับขี่เลขที่ :</strong> <span>{selectedOrder.licenseNumber}</span>
          </div>
          <div className="info-row">
            <strong>วันอนุญาต :</strong> <span>{selectedOrder.approvalDate}</span>
          </div>
          <div className="info-row">
            <strong>ออกโดยนายทะเบียนจังหวัด :</strong> <span>{selectedOrder.registrar}</span>
          </div>
          <div className="info-row">
            <strong>ชนิดใบขับขี่ :</strong> <span>{selectedOrder.licenseType}</span>
          </div>
        </div>
      </div >

      <div className='button'>
        <button className='btn' type='submit' id='red'>ยกเลิก</button>
        <button className='btn' type='submit' id='blue'>บันทึก</button>
      </div>


    <footer>
      <div className='footer'>
      <h3>สำนักงานตำรวจแห่งชาติ</h3>
      </div>
    </footer>

    </>
  );
}

export default Mobiledasboard;
