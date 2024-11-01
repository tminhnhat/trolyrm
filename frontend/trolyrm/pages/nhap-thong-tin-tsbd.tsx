// pages/nhap-thong-tin-tsbd.js
import React from 'react';
import '../public/styles.css'; // Đường dẫn tới file CSS

const NhapThongTinTSBD = () => {
  return (
    <div>
      <h1>Nhập Thông Tin TSBĐ</h1>
      <form>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 50%', padding: '10px' }}>
            <label>Loại GCN</label>
            <input type="text" name="loai_gcn" />
            <label>Số GCN</label>
            <input type="text" name="so_gcn" />
            <label>Nơi Cấp GCN</label>
            <input type="text" name="noi_cap_gcn" />
            <label>Số Vào Sổ GCN</label>
            <input type="text" name="so_vao_so_gcn" />
            <label>Số CIF Chủ TS</label>
            <input type="text" name="so_cif_chu_ts" />
            <label>Số Thửa</label>
            <input type="text" name="so_thua" />
            <label>Tờ Bản Đồ</label>
            <input type="text" name="to_ban_do" />
            <label>Địa Chỉ Đất</label>
            <input type="text" name="dia_chi_dat" />
            <label>Hình Thức Sử Dụng</label>
            <input type="text" name="hinh_thuc_su_dung" />
            <label>Thời Gian Sử Dụng</label>
            <input type="text" name="thoi_gian_su_dung" />
            <label>Nguồn Gốc Đất</label>
            <input type="text" name="nguon_goc_dat" />
            <label>Loại TS Trên Đất</label>
            <input type="text" name="loai_ts_tren_dat" />
            <label>Địa Chỉ Nhà</label>
            <input type="text" name="dia_chi_nha" />
            <label>Kết Cấu</label>
            <input type="text" name="ket_cau" />
            <label>Cấp Hạng</label>
            <input type="text" name="cap_hang" />
            <label>Số Tầng</label>
            <input type="text" name="so_tang" />
            <label>Năm Hoàn Thành XD</label>
            <input type="text" name="nam_hoan_thanh_xd" />
            <label>Thời Hạn Sở Hữu</label>
            <input type="text" name="thoi_han_so_huu" />
            <label>Ghi Chú</label>
            <input type="text" name="ghi_chu" />
            <label>Mức Cho Vay Tối Đa</label>
            <input type="text" name="muc_cho_vay_toi_da" />
            <label>Tổng Giá Trị TSBĐ</label>
            <input type="text" name="tong_gia_tri_tsbd" />
            <label>Tổng Giá Trị Nhà</label>
            <input type="text" name="tong_gia_tri_nha" />
            <label>Tổng Giá Trị Đất</label>
            <input type="text" name="tong_gia_tri_dat" />
            <label>Tổng Giá Trị Đất Khác</label>
            <input type="text" name="tong_gia_tri_dat_khac" />
            <label>Tổng Giá Trị Đất Trồng Cây</label>
            <input type="text" name="tong_gia_tri_dat_trong_cay" />
            <label>Tổng Giá Trị Đất Ở</label>
            <input type="text" name="tong_gia_tri_dat_o" />
          </div>
          <div style={{ flex: '1 1 50%', padding: '10px' }}>
            <label>Đơn Giá Nhà</label>
            <input type="text" name="don_gia_nha" />
            <label>Đơn Giá Đất Khác</label>
            <input type="text" name="don_gia_dat_khac" />
            <label>Đơn Giá Đất Trồng Cây</label>
            <input type="text" name="don_gia_dat_trong_cay" />
            <label>Đơn Giá Đất Ở</label>
            <input type="text" name="don_gia_dat_o" />
            <label>Diện Tích Sàn</label>
            <input type="text" name="dien_tich_san" />
            <label>Diện Tích Xây Dựng</label>
            <input type="text" name="dien_tich_xay_dung" />
            <label>Diện Tích Đất Khác</label>
            <input type="text" name="dien_tich_dat_khac" />
            <label>Diện Tích Đất Trồng Cây</label>
            <input type="text" name="dien_tich_dat_trong_cay" />
            <label>Diện Tích Đất Ở</label>
            <input type="text" name="dien_tich_dat_o" />
            <label>Diện Tích</label>
            <input type="text" name="dien_tich" />
            <label>Diện Tích Bằng Chữ</label>
            <input type="text" name="dien_tich_bang_chu" />
            <label>Ngày Cấp GCN</label>
            <input type="date" name="ngay_cap_gcn" />
            <label>Mục Đích Sử Dụng Đất</label>
            <input type="text" name="muc_dich_su_dung_dat" />
            <label>Hình Thức Sở Hữu Nhà</label>
            <input type="text" name="hinh_thuc_so_huu_nha" />
            <label>Vị Trí Thửa Đất</label>
            <input type="text" name="vitri_thua_dat" />
            <label>Đánh Giá TSBĐ</label>
            <input type="text" name="danhgiatsbd" />
            <label>Ngày Định Giá TSBĐ</label>
            <input type="date" name="ngay_dinh_gia_tsbd" />
            <label>Tỷ Lệ Khấu Hao Nhà Ở</label>
            <input type="text" name="ty_le_khau_hao_nha_o" />
            <label>Tổng Giá Trị TSBĐ Bằng Chữ</label>
            <input type="text" name="tong_gia_tri_tsbd_bang_chu" />
            <label>Số HĐTC TSBĐ</label>
            <input type="text" name="so_hdtc_tsbd" />
            <label>Văn Phòng ĐKTC</label>
            <input type="text" name="van_phong_dktc" />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NhapThongTinTSBD;