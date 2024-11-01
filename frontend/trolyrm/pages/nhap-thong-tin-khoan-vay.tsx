// pages/nhap-thong-tin-khoan-vay.js
import React from 'react';

const NhapThongTinKhoanVay = () => {
  return (
    <div>
      <h1>Nhập Thông Tin Khoản Vay</h1>
      <form>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 50%', padding: '10px' }}>
            <label>Thời Gian GNN</label>
            <input type="text" name="thoi_gian_gnn" />
            <label>BCTC Chỉ Ngoài Giá Vốn Năm 0</label>
            <input type="text" name="bctc_chingoaigiavon_nam_0" />
            <label>BCTC Chỉ Ngoài Giá Vốn Năm 1</label>
            <input type="text" name="bctc_chingoaigiavon_nam_1" />
            <label>BCTC Chỉ Ngoài Giá Vốn Năm 2</label>
            <input type="text" name="bctc_chingoaigiavon_nam_2" />
            <label>BCTC Doanh Thu Năm 0</label>
            <input type="text" name="bctc_doanhthu_nam_0" />
            <label>BCTC Doanh Thu Năm 1</label>
            <input type="text" name="bctc_doanhthu_nam_1" />
            <label>BCTC Doanh Thu Năm 2</label>
            <input type="text" name="bctc_doanhthu_nam_2" />
            <label>BCTC Giá Vốn Năm 0</label>
            <input type="text" name="bctc_giavon_nam_0" />
            <label>BCTC Giá Vốn Năm 1</label>
            <input type="text" name="bctc_giavon_nam_1" />
            <label>BCTC Giá Vốn Năm 2</label>
            <input type="text" name="bctc_giavon_nam_2" />
            <label>BCTC Lãi Vay Năm 0</label>
            <input type="text" name="bctc_laivay_nam_0" />
            <label>BCTC Lãi Vay Năm 1</label>
            <input type="text" name="bctc_laivay_nam_1" />
            <label>BCTC Lãi Vay Năm 2</label>
            <input type="text" name="bctc_laivay_nam_2" />
            <label>BCTC Lợi Nhuận Năm 0</label>
            <input type="text" name="bctc_loinhuan_nam_0" />
            <label>BCTC Lợi Nhuận Năm 1</label>
            <input type="text" name="bctc_loinhuan_nam_1" />
            <label>BCTC Lợi Nhuận Năm 2</label>
            <input type="text" name="bctc_loinhuan_nam_2" />
            <label>BCTC Nợ Dài Hạn Năm 0</label>
            <input type="text" name="bctc_nodaihan_nam_0" />
            <label>BCTC Nợ Dài Hạn Năm 1</label>
            <input type="text" name="bctc_nodaihan_nam_1" />
            <label>BCTC Nợ Dài Hạn Năm 2</label>
            <input type="text" name="bctc_nodaihan_nam_2" />
            <label>BCTC Nợ NHCT Năm 0</label>
            <input type="text" name="bctc_nonhct_nam_0" />
            <label>BCTC Nợ NHCT Năm 1</label>
            <input type="text" name="bctc_nonhct_nam_1" />
            <label>BCTC Nợ NHCT Năm 2</label>
            <input type="text" name="bctc_nonhct_nam_2" />
            <label>BCTC Nợ TCTD Năm 0</label>
            <input type="text" name="bctc_notctd_nam_0" />
            <label>BCTC Nợ TCTD Năm 1</label>
            <input type="text" name="bctc_notctd_nam_1" />
            <label>BCTC Nợ TCTD Năm 2</label>
            <input type="text" name="bctc_notctd_nam_2" />
            <label>BCTC Nợ Trả Người Bán Năm 0</label>
            <input type="text" name="bctc_notranguoiban_nam_0" />
            <label>BCTC Nợ Trả Người Bán Năm 1</label>
            <input type="text" name="bctc_notranguoiban_nam_1" />
            <label>BCTC Nợ Trả Người Bán Năm 2</label>
            <input type="text" name="bctc_notranguoiban_nam_2" />
            <label>BCTC Phải Thu Năm 0</label>
            <input type="text" name="bctc_phaithu_nam_0" />
            <label>BCTC Phải Thu Năm 1</label>
            <input type="text" name="bctc_phaithu_nam_1" />
            <label>BCTC Phải Thu Năm 2</label>
            <input type="text" name="bctc_phaithu_nam_2" />
            <label>BCTC Thuế Năm 0</label>
            <input type="text" name="bctc_thue_nam_0" />
            <label>BCTC Thuế Năm 1</label>
            <input type="text" name="bctc_thue_nam_1" />
            <label>BCTC Thuế Năm 2</label>
            <input type="text" name="bctc_thue_nam_2" />
            <label>BCTC Tiền Năm 0</label>
            <input type="text" name="bctc_tien_nam_0" />
            <label>BCTC Tiền Năm 1</label>
            <input type="text" name="bctc_tien_nam_1" />
            <label>BCTC Tiền Năm 2</label>
            <input type="text" name="bctc_tien_nam_2" />
            <label>BCTC Tồn Kho Năm 0</label>
            <input type="text" name="bctc_tonkho_nam_0" />
            <label>BCTC Tồn Kho Năm 1</label>
            <input type="text" name="bctc_tonkho_nam_1" />
            <label>BCTC Tồn Kho Năm 2</label>
            <input type="text" name="bctc_tonkho_nam_2" />
            <label>BCTC TSCĐ Năm 0</label>
            <input type="text" name="bctc_tscd_nam_0" />
            <label>BCTC TSCĐ Năm 1</label>
            <input type="text" name="bctc_tscd_nam_1" />
            <label>BCTC TSCĐ Năm 2</label>
            <input type="text" name="bctc_tscd_nam_2" />
            <label>BCTC Vốn CSH Năm 0</label>
            <input type="text" name="bctc_voncsh_nam_0" />
            <label>BCTC Vốn CSH Năm 1</label>
            <input type="text" name="bctc_voncsh_nam_1" />
            <label>BCTC Vốn CSH Năm 2</label>
            <input type="text" name="bctc_voncsh_nam_2" />
          </div>
          <div style={{ flex: '1 1 50%', padding: '10px' }}>
            <label>CBTD</label>
            <input type="text" name="cbtd" />
            <label>Hạn Mức</label>
            <input type="text" name="han_muc" />
            <label>Keyword Biện Pháp Kiểm Soát Rủi Ro</label>
            <input type="text" name="keyword_bienphapkiemsoatruiro" />
            <label>Keyword Cơ Sở Vật Chất Thiết Bị</label>
            <input type="text" name="keyword_cosovatchatthietbi" />
            <label>Keyword Đánh Giá Lợi Ích</label>
            <input type="text" name="keyword_danhgialoiich" />
            <label>Keyword Đánh Giá Năng Lực Tổ Chức KD</label>
            <input type="text" name="keyword_danhgianangluctochuckd" />
            <label>Keyword Đánh Giá Nguồn Lao Động</label>
            <input type="text" name="keyword_danhgianguonlaodong" />
            <label>Keyword Đánh Giá Nguyên Liệu Đầu Vào</label>
            <input type="text" name="keyword_danhgianguyenlieudauvao" />
            <label>Keyword Đánh Giá PAKD</label>
            <input type="text" name="keyword_danhgiapakd" />
            <label>Keyword Đánh Giá Quy Mô</label>
            <input type="text" name="keyword_danhgiaquymo" />
            <label>Keyword Đánh Giá Rủi Ro</label>
            <input type="text" name="keyword_danhgiaruiro" />
            <label>Keyword Đánh Giá Thị Trường Tiêu Thụ</label>
            <input type="text" name="keyword_danhgiathitruongtieuthu" />
            <label>Keyword Đánh Giá Thông Tin Tài Chính</label>
            <input type="text" name="keyword_danhgiathongtintaichinh" />
            <label>Keyword Địa Điểm Kinh Doanh</label>
            <input type="text" name="keyword_diadiemkinhdoanh" />
            <label>Keyword Lĩnh Vực Kinh Nghiệm SXKD</label>
            <input type="text" name="keyword_linhvuc_kinhnghiemsxkd" />
            <label>Keyword Mức Độ Phụ Thuộc Nhà Cung Cấp</label>
            <input type="text" name="keyword_mucdophuthuocnhacungcap" />
            <label>Keyword Nhà Cung Cấp Đầu Vào</label>
            <input type="text" name="keyword_nhacungcapdauvao" />
            <label>Keyword Phương Thức Hoạt Động SXKD</label>
            <input type="text" name="keyword_phuongthuchoatdongsxkd" />
            <label>Lãi Suất</label>
            <input type="text" name="lai_suat" />
            <label>Lãnh Đạo Phòng</label>
            <input type="text" name="lanhdaophong" />
            <label>Mẫu Tờ Trình</label>
            <input type="text" name="mautotrinh" />
            <label>Mục Đích Vay</label>
            <input type="text" name="muc_dich_vay" />
            <label>Ngày HĐTD</label>
            <input type="date" name="ngay_hdtd" />
            <label>Nhóm Ngành Nghề</label>
            <input type="text" name="nhom_nganh_nghe" />
            <label>Nội Dung Biện Pháp Kiểm Soát Rủi Ro</label>
            <input type="text" name="noidung_bienphapkiemsoatruiro" />
            <label>Nội Dung Cơ Sở Vật Chất Thiết Bị</label>
            <input type="text" name="noidung_cosovatchatthietbi" />
            <label>Nội Dung Đánh Giá Lợi Ích</label>
            <input type="text" name="noidung_danhgialoiich" />
            <label>Nội Dung Đánh Giá Năng Lực Tổ Chức KD</label>
            <input type="text" name="noidung_danhgianangluctochuckd" />
            <label>Nội Dung Đánh Giá Nguồn Lao Động</label>
            <input type="text" name="noidung_danhgianguonlaodong" />
            <label>Nội Dung Đánh Giá Nguyên Liệu Đầu Vào</label>
            <input type="text" name="noidung_danhgianguyenlieudauvao" />
            <label>Nội Dung Đánh Giá PAKD</label>
            <input type="text" name="noidung_danhgiapakd" />
            <label>Nội Dung Đánh Giá Quy Mô</label>
            <input type="text" name="noidung_danhgiaquymo" />
            <label>Nội Dung Đánh Giá Rủi Ro</label>
            <input type="text" name="noidung_danhgiaruiro" />
            <label>Nội Dung Đánh Giá Thị Trường Tiêu Thụ</label>
            <input type="text" name="noidung_danhgiathitruongtieuthu" />
            <label>Nội Dung Đánh Giá Thông Tin Tài Chính</label>
            <input type="text" name="noidung_danhgiathongtintaichinh" />
            <label>Nội Dung Địa Điểm Kinh Doanh</label>
            <input type="text" name="noidung_diadiemkinhdoanh" />
            <label>Nội Dung Lĩnh Vực Kinh Nghiệm SXKD</label>
            <input type="text" name="noidung_linhvuc_kinhnghiemsxkd" />
            <label>Nội Dung Mức Độ Phụ Thuộc Nhà Cung Cấp</label>
            <input type="text" name="noidung_mucdophuthuocnhacungcap" />
            <label>Nội Dung Nhà Cung Cấp Đầu Vào</label>
            <input type="text" name="noidung_nhacungcapdauvao" />
            <label>Nội Dung Phương Thức Hoạt Động SXKD</label>
            <input type="text" name="noidung_phuongthuchoatdongsxkd" />
            <label>PAKD Chi Phí Khác</label>
            <input type="text" name="pakd_chiphikhac" />
            <label>PAKD Doanh Thu</label>
            <input type="text" name="pakd_doanhthu" />
            <label>PAKD Giá Vốn</label>
            <input type="text" name="pakd_giavon" />
            <label>PAKD Lãi Vay</label>
            <input type="text" name="pakd_laivay" />
            <label>PAKD Nhân Công</label>
            <input type="text" name="pakd_nhancong" />
            <label>PAKD Thuế</label>
            <input type="text" name="pakd_thue" />
            <label>PAKD Vay NHCT</label>
            <input type="text" name="pakd_vaynhct" />
            <label>PAKD Vay TCTD Khác</label>
            <input type="text" name="pakd_vaytctdkhac" />
            <label>PAKD Vòng Quay</label>
            <input type="text" name="pakd_vongquay" />
            <label>PAKD Vốn Tự Có</label>
            <input type="text" name="pakd_vontuco" />
            <label>Số HĐTD</label>
            <input type="text" name="so_hdtd" />
            <label>Số Tiền Thu Phí</label>
            <input type="text" name="sotienthuphi" />
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NhapThongTinKhoanVay;