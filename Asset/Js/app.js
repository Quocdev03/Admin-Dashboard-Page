// Đổi font chữ mặc định của ChartJS
Chart.defaults.global.defaultFontFamily = "Poppins";
// Tạo biến chứa đối tượng canvas
let ctx = document.querySelector("#revenueChart");
// Tạo biến chứa đối tượng Chart
let revChart = new Chart(ctx, {
    // Loại biểu đồ
    type: "line",
    // Dữ liệu
    data: {
        // Nhãn trục X
        labels: [
            "Sept 1", "Sept 3", "Sept 6", "Sept 9",
            "Sept 12", "Sept 15", "Sept 18", "Sept 21",
            "Sept 24", "Sept 27", "Sept 30"],
        // Dữ liệu
        datasets: [
            {
                label: "Views", // Tên của dữ liệu
                borderColor: "#2ec3a3", // Màu viền
                borderWidth: "3", // Độ rộng viền
                backgroundColor: "rgba(235,247,245,0.7)", // Màu nền
                data: [0, 30, 60, 25, 50, 25, 50, 90, 120, 70, 90] // Dữ liệu
            },
            {
                label: "Watch Time",
                borderColor: "#396aff",
                borderWidth: "3",
                backgroundColor: "rgba(235,238,253,0.7)",
                data: [0, 60, 25, 100, 20, 75, 30, 55, 20, 80, 40]
            }
        ]
    },
    // Các tùy chọn
    options: {
        responsive: true, // Độ phân giải
        tooltips: {
            intersect: false, // Hiển thị tooltip khi hover vào đường
            node: "index", // Hiển thị tooltip khi hover vào điểm
        }
    }
})