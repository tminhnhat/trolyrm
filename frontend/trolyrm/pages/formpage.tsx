import React from 'react';

const FormPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl mb-4">Thông tin khách hàng vay</h1>
      <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="so_cif_kh_vay">Số CIF KH Vay</label>
          <input type="text" id="so_cif_kh_vay" name="so_cif_kh_vay" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="ten_kh_vay">Tên KH Vay</label>
          <input type="text" id="ten_kh_vay" name="ten_kh_vay" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="ngay_sinh">Ngày Sinh</label>
          <input type="date" id="ngay_sinh" name="ngay_sinh" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="so_cccd">Số CCCD</label>
          <input type="text" id="so_cccd" name="so_cccd" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="noi_cap_cccd">Nơi Cấp CCCD</label>
          <input type="text" id="noi_cap_cccd" name="noi_cap_cccd" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="ngay_cap_cccd">Ngày Cấp CCCD</label>
          <input type="date" id="ngay_cap_cccd" name="ngay_cap_cccd" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="dia_chi_kh_vay">Địa Chỉ KH Vay</label>
          <input type="text" id="dia_chi_kh_vay" name="dia_chi_kh_vay" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="so_dt_kh_vay">Số ĐT KH Vay</label>
          <input type="text" id="so_dt_kh_vay" name="so_dt_kh_vay" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="so_cif_kh_2">Số CIF KH 2</label>
          <input type="text" id="so_cif_kh_2" name="so_cif_kh_2" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="ten_kh_2">Tên KH 2</label>
          <input type="text" id="ten_kh_2" name="ten_kh_2" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="ngay_sinh_2">Ngày Sinh 2</label>
          <input type="date" id="ngay_sinh_2" name="ngay_sinh_2" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="so_cccd_2">Số CCCD 2</label>
          <input type="text" id="so_cccd_2" name="so_cccd_2" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="noi_cap_cccd_2">Nơi Cấp CCCD 2</label>
          <input type="text" id="noi_cap_cccd_2" name="noi_cap_cccd_2" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="ngay_cap_cccd_2">Ngày Cấp CCCD 2</label>
          <input type="date" id="ngay_cap_cccd_2" name="ngay_cap_cccd_2" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="loai_kh_vay">Loại KH Vay</label>
          <input type="text" id="loai_kh_vay" name="loai_kh_vay" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="so_dkkd">Số ĐKKD</label>
          <input type="text" id="so_dkkd" name="so_dkkd" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="ngay_cap_dkkd">Ngày Cấp ĐKKD</label>
          <input type="date" id="ngay_cap_dkkd" name="ngay_cap_dkkd" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="noi_cap_dkkd">Nơi Cấp ĐKKD</label>
          <input type="text" id="noi_cap_dkkd" name="noi_cap_dkkd" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="nganh_nghe_kd">Ngành Nghề KD</label>
          <input type="text" id="nganh_nghe_kd" name="nganh_nghe_kd" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="thu_nhap_luong_1">Thu Nhập Lương 1</label>
          <input type="text" id="thu_nhap_luong_1" name="thu_nhap_luong_1" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="thu_nhap_luong_2">Thu Nhập Lương 2</label>
          <input type="text" id="thu_nhap_luong_2" name="thu_nhap_luong_2" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="thu_nhap_cho_thue_1">Thu Nhập Cho Thuê 1</label>
          <input type="text" id="thu_nhap_cho_thue_1" name="thu_nhap_cho_thue_1" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="thu_nhap_cho_thue_2">Thu Nhập Cho Thuê 2</label>
          <input type="text" id="thu_nhap_cho_thue_2" name="thu_nhap_cho_thue_2" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="thu_nhap_kd_1">Thu Nhập KD 1</label>
          <input type="text" id="thu_nhap_kd_1" name="thu_nhap_kd_1" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="thu_nhap_kd_2">Thu Nhập KD 2</label>
          <input type="text" id="thu_nhap_kd_2" name="thu_nhap_kd_2" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="thu_nhap_khac_1">Thu Nhập Khác 1</label>
          <input type="text" id="thu_nhap_khac_1" name="thu_nhap_khac_1" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="thu_nhap_khac_2">Thu Nhập Khác 2</label>
          <input type="text" id="thu_nhap_khac_2" name="thu_nhap_khac_2" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="chi_phi_khac_1">Chi Phí Khác 1</label>
          <input type="text" id="chi_phi_khac_1" name="chi_phi_khac_1" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="chi_phi_khac_2">Chi Phí Khác 2</label>
          <input type="text" id="chi_phi_khac_2" name="chi_phi_khac_2" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="chi_phi_sinh_hoat_1">Chi Phí Sinh Hoạt 1</label>
          <input type="text" id="chi_phi_sinh_hoat_1" name="chi_phi_sinh_hoat_1" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="chi_phi_sinh_hoat_2">Chi Phí Sinh Hoạt 2</label>
          <input type="text" id="chi_phi_sinh_hoat_2" name="chi_phi_sinh_hoat_2" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="chi_phi_y_te_di_lai_1">Chi Phí Y Tế Đi Lại 1</label>
          <input type="text" id="chi_phi_y_te_di_lai_1" name="chi_phi_y_te_di_lai_1" className="border p-2 w-full" />
        </div>
        <div>
          <label htmlFor="chi_phi_y_te_di_lai_2">Chi Phí Y Tế Đi Lại 2</label>
          <input type="text" id="chi_phi_y_te_di_lai_2" name="chi_phi_y_te_di_lai_2" className="border p-2 w-full" />
        </div>
      </form>
    </div>
  );
};

export default FormPage;

