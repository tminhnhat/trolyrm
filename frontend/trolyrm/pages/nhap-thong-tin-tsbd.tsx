import React, { useState } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../provider/firebaseConfig';

const NhapThongTinTSBD = () => {
  const [formData, setFormData] = useState({
    loai_gcn: '',
    so_gcn: '',
    noi_cap_gcn: '',
    so_vao_so_gcn: '',
    so_cif_chu_ts: '',
    so_thua: '',
    to_ban_do: '',
    dia_chi_dat: '',
    hinh_thuc_su_dung: '',
    thoi_gian_su_dung: '',
    nguon_goc_dat: '',
    loai_ts_tren_dat: '',
    dia_chi_nha: '',
    ket_cau: '',
    cap_hang: '',
    so_tang: '',
    nam_hoan_thanh_xd: '',
    thoi_han_so_huu: '',
    ghi_chu: '',
    muc_cho_vay_toi_da: '',
    tong_gia_tri_tsbd: '',
    tong_gia_tri_nha: '',
    tong_gia_tri_dat: '',
    tong_gia_tri_dat_khac: '',
    tong_gia_tri_dat_trong_cay: '',
    tong_gia_tri_dat_o: '',
    don_gia_nha: '',
    don_gia_dat_khac: '',
    don_gia_dat_trong_cay: '',
    don_gia_dat_o: '',
    dien_tich_san: '',
    dien_tich_xay_dung: '',
    dien_tich_dat_khac: '',
    dien_tich_dat_trong_cay: '',
    dien_tich_dat_o: '',
    dien_tich: '',
    dien_tich_bang_chu: '',
    ngay_cap_gcn: '',
    muc_dich_su_dung_dat: '',
    hinh_thuc_so_huu_nha: '',
    vitri_thua_dat: '',
    danhgiatsbd: '',
    ngay_dinh_gia_tsbd: '',
    ty_le_khau_hao_nha_o: '',
    tong_gia_tri_tsbd_bang_chu: '',
    so_hdtc_tsbd: '',
    van_phong_dktc: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await setDoc(doc(db, 'thongtinkhcn', 'yourDocumentId'), formData);
      alert('Data updated successfully!');
    } catch (error) {
      console.error('Error updating document: ', error);
      alert('Failed to update data.');
    }
  };

  return (
    <div>
      <h1>Nhập Thông Tin TSBĐ</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 50%', padding: '10px' }}>
            <label>Loại GCN</label>
            <input type="text" name="loai_gcn" value={formData.loai_gcn} onChange={handleChange} />
            <label>Số GCN</label>
            <input type="text" name="so_gcn" value={formData.so_gcn} onChange={handleChange} />
            <label>Nơi Cấp GCN</label>
            <input type="text" name="noi_cap_gcn" value={formData.noi_cap_gcn} onChange={handleChange} />
            <label>Số Vào Sổ GCN</label>
            <input type="text" name="so_vao_so_gcn" value={formData.so_vao_so_gcn} onChange={handleChange} />
            <label>Số CIF Chủ TS</label>
            <input type="text" name="so_cif_chu_ts" value={formData.so_cif_chu_ts} onChange={handleChange} />
            <label>Số Thửa</label>
            <input type="text" name="so_thua" value={formData.so_thua} onChange={handleChange} />
            <label>Tờ Bản Đồ</label>
            <input type="text" name="to_ban_do" value={formData.to_ban_do} onChange={handleChange} />
            <label>Địa Chỉ Đất</label>
            <input type="text" name="dia_chi_dat" value={formData.dia_chi_dat} onChange={handleChange} />
            <label>Hình Thức Sử Dụng</label>
            <input type="text" name="hinh_thuc_su_dung" value={formData.hinh_thuc_su_dung} onChange={handleChange} />
            <label>Thời Gian Sử Dụng</label>
            <input type="text" name="thoi_gian_su_dung" value={formData.thoi_gian_su_dung} onChange={handleChange} />
            <label>Nguồn Gốc Đất</label>
            <input type="text" name="nguon_goc_dat" value={formData.nguon_goc_dat} onChange={handleChange} />
            <label>Loại TS Trên Đất</label>
            <input type="text" name="loai_ts_tren_dat" value={formData.loai_ts_tren_dat} onChange={handleChange} />
            <label>Địa Chỉ Nhà</label>
            <input type="text" name="dia_chi_nha" value={formData.dia_chi_nha} onChange={handleChange} />
            <label>Kết Cấu</label>
            <input type="text" name="ket_cau" value={formData.ket_cau} onChange={handleChange} />
            <label>Cấp Hạng</label>
            <input type="text" name="cap_hang" value={formData.cap_hang} onChange={handleChange} />
            <label>Số Tầng</label>
            <input type="text" name="so_tang" value={formData.so_tang} onChange={handleChange} />
            <label>Năm Hoàn Thành XD</label>
            <input type="text" name="nam_hoan_thanh_xd" value={formData.nam_hoan_thanh_xd} onChange={handleChange} />
            <label>Thời Hạn Sở Hữu</label>
            <input type="text" name="thoi_han_so_huu" value={formData.thoi_han_so_huu} onChange={handleChange} />
            <label>Ghi Chú</label>
            <input type="text" name="ghi_chu" value={formData.ghi_chu} onChange={handleChange} />
            <label>Mức Cho Vay Tối Đa</label>
            <input type="text" name="muc_cho_vay_toi_da" value={formData.muc_cho_vay_toi_da} onChange={handleChange} />
            <label>Tổng Giá Trị TSBĐ</label>
            <input type="text" name="tong_gia_tri_tsbd" value={formData.tong_gia_tri_tsbd} onChange={handleChange} />
            <label>Tổng Giá Trị Nhà</label>
            <input type="text" name="tong_gia_tri_nha" value={formData.tong_gia_tri_nha} onChange={handleChange} />
            <label>Tổng Giá Trị Đất</label>
            <input type="text" name="tong_gia_tri_dat" value={formData.tong_gia_tri_dat} onChange={handleChange} />
            <label>Tổng Giá Trị Đất Khác</label>
            <input type="text" name="tong_gia_tri_dat_khac" value={formData.tong_gia_tri_dat_khac} onChange={handleChange} />
            <label>Tổng Giá Trị Đất Trồng Cây</label>
            <input type="text" name="tong_gia_tri_dat_trong_cay" value={formData.tong_gia_tri_dat_trong_cay} onChange={handleChange} />
            <label>Tổng Giá Trị Đất Ở</label>
            <input type="text" name="tong_gia_tri_dat_o" value={formData.tong_gia_tri_dat_o} onChange={handleChange} />
          </div>
          <div style={{ flex: '1 1 50%', padding: '10px' }}>
            <label>Đơn Giá Nhà</label>
            <input type="text" name="don_gia_nha" value={formData.don_gia_nha} onChange={handleChange} />
            <label>Đơn Giá Đất Khác</label>
            <input type="text" name="don_gia_dat_khac" value={formData.don_gia_dat_khac} onChange={handleChange} />
            <label>Đơn Giá Đất Trồng Cây</label>
            <input type="text" name="don_gia_dat_trong_cay" value={formData.don_gia_dat_trong_cay} onChange={handleChange} />
            <label>Đơn Giá Đất Ở</label>
            <input type="text" name="don_gia_dat_o" value={formData.don_gia_dat_o} onChange={handleChange} />
            <label>Diện Tích Sàn</label>
            <input type="text" name="dien_tich_san" value={formData.dien_tich_san} onChange={handleChange} />
            <label>Diện Tích Xây Dựng</label>
            <input type="text" name="dien_tich_xay_dung" value={formData.dien_tich_xay_dung} onChange={handleChange} />
            <label>Diện Tích Đất Khác</label>
            <input type="text" name="dien_tich_dat_khac" value={formData.dien_tich_dat_khac} onChange={handleChange} />
            <label>Diện Tích Đất Trồng Cây</label>
            <input type="text" name="dien_tich_dat_trong_cay" value={formData.dien_tich_dat_trong_cay} onChange={handleChange} />
            <label>Diện Tích Đất Ở</label>
            <input type="text" name="dien_tich_dat_o" value={formData.dien_tich_dat_o} onChange={handleChange} />
            <label>Diện Tích</label>
            <input type="text" name="dien_tich" value={formData.dien_tich} onChange={handleChange} />
            <label>Diện Tích Bằng Chữ</label>
            <input type="text" name="dien_tich_bang_chu" value={formData.dien_tich_bang_chu} onChange={handleChange} />
            <label>Ngày Cấp GCN</label>
            <input type="date" name="ngay_cap_gcn" value={formData.ngay_cap_gcn} onChange={handleChange} />
            <label>Mục Đích Sử Dụng Đất</label>
            <input type="text" name="muc_dich_su_dung_dat" value={formData.muc_dich_su_dung_dat} onChange={handleChange} />
            <label>Hình Thức Sở Hữu Nhà</label>
            <input type="text" name="hinh_thuc_so_huu_nha" value={formData.hinh_thuc_so_huu_nha} onChange={handleChange} />
            <label>Vị Trí Thửa Đất</label>
            <input type="text" name="vitri_thua_dat" value={formData.vitri_thua_dat} onChange={handleChange} />
            <label>Đánh Giá TSBĐ</label>
            <input type="text" name="danhgiatsbd" value={formData.danhgiatsbd} onChange={handleChange} />
            <label>Ngày Định Giá TSBĐ</label>
            <input type="date" name="ngay_dinh_gia_tsbd" value={formData.ngay_dinh_gia_tsbd} onChange={handleChange} />
            <label>Tỷ Lệ Khấu Hao Nhà Ở</label>
            <input type="text" name="ty_le_khau_hao_nha_o" value={formData.ty_le_khau_hao_nha_o} onChange={handleChange} />
            <label>Tổng Giá Trị TSBĐ Bằng Chữ</label>
            <input type="text" name="tong_gia_tri_tsbd_bang_chu" value={formData.tong_gia_tri_tsbd_bang_chu} onChange={handleChange} />
            <label>Số HĐTC TSBĐ</label>
            <input type="text" name="so_hdtc_tsbd" value={formData.so_hdtc_tsbd} onChange={handleChange} />
            <label>Văn Phòng ĐKTC</label>
            <input type="text" name="van_phong_dktc" value={formData.van_phong_dktc} onChange={handleChange} />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NhapThongTinTSBD;