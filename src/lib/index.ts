export const ROUTE_PATHS = {
  HOME: '/',
} as const;

export interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  jobRole: string;
  companySize: string;
  issueDescription?: string;
}

export const WEBINAR_INFO = {
  title: "Khai thác trọn bộ tính năng bảo mật trong Microsoft 365",
  headline: "Webinar miễn phí: Khai thác trọn bộ tính năng bảo mật trong Microsoft 365",
  subheadline: "Cách khai thác triệt để Microsoft Office 365 để: Phòng chống virus, quản lý thiết bị, mã hóa dữ liệu chuẩn ISO, chống tấn công mạng, Giám sát dữ liệu nhạy cảm.",
  date: "03/03/2026",
  time: "14:00 - 15:30",
  location: "Zoom Online",
  language: "Tiếng Việt",
  speaker: "TBC",
  capacity: 150,
  ctaText: " Vui lòng hoàn thành khảo sát để nhận tài liệu hội thảo",
  targetAudience: [
    "CEO / Founder doanh nghiệp SME",
    "Quản lý vận hành / Trưởng bộ phận",
    "IT / IT kiêm nhiệm trong doanh nghiệp SME"
  ],
  suitableFor: {
    size: "10 – 150+ nhân sự",
    goals: [
      "Tối ưu hiệu suất làm việc",
      "Ứng dụng Microsoft 365 & AI một cách thực tế"
    ]
  },
  benefits: [
    {
      title: "Hiểu đúng & khai thác tối đa Microsoft Defender",
      description: "Tìm hiểu cách Defender cho Email, Endpoint và Identity hoạt động trong thực tế mà nhiều doanh nghiệp đang bỏ sót."
    },
    {
      title: "Phát hiện & ngăn chặn tấn công phishing, malware, ransomware",
      description: "Sử dụng các công cụ bảo mật có sẵn trong Microsoft 365, không cần đầu tư thêm giải pháp thứ ba."
    },
    {
      title: "Nhận diện và phản ứng nhanh trước sự cố an ninh",
      description: "Cách theo dõi cảnh báo, đánh giá mức độ rủi ro và xử lý từng bước nhờ Microsoft Defender."
    },
    {
      title: "AI Copilot hỗ trợ đội IT & Security",
      description: "Copilot giúp phân tích sự cố, tóm tắt cảnh báo và đề xuất hành động bảo mật chính xác và hiệu quả hơn."
    }
  ],
  agenda: [
    {
      title: "Phòng chống ransomware và các mối đe dọa an ninh hiện đại",
      description: "Ứng dụng Microsoft Defender để phát hiện, ngăn chặn và phản ứng sớm trước các cuộc tấn công tinh vi."
    },
    {
      title: "Ngăn chặn tấn công phishing và xâm nhập qua email",
      description: "Bảo vệ người dùng trước email giả mạo, mã độc và lừa đảo – nguyên nhân hàng đầu gây mất an toàn thông tin."
    },
    {
      title: "Giám sát và bảo vệ dữ liệu nhạy cảm trong Microsoft 365",
      description: "Kiểm soát truy cập, giảm thiểu rủi ro rò rỉ dữ liệu nội bộ và đáp ứng các tiêu chuẩn bảo mật phổ biến."
    },
    {
      title: "AI Copilot hỗ trợ đội IT & Security nâng cao hiệu quả bảo mật",
      description: "Copilot giúp phân tích cảnh báo, tóm tắt sự cố và đề xuất hành động xử lý nhanh chóng, chính xác hơn."
    },
    {
      title: "Quản lý và bảo vệ thiết bị người dùng trong các tình huống rủi ro",
      description: "Hỗ trợ khóa và bảo vệ thiết bị từ xa khi thất lạc hoặc bị đánh cắp, đảm bảo an toàn dữ liệu doanh nghiệp."
    }
  ],
  specialFeatures: [
    "Nội dung trình bày theo từng bước cụ thể, dễ hiểu – dễ áp dụng",
    "Minh họa bằng kịch bản tấn công thực tế và best practices",
    "Giúp doanh nghiệp tận dụng tối đa Microsoft 365 hiện có, không cần đầu tư thêm giải pháp bên ngoài"
  ],
  notes: [
    "Vui lòng hạn chế ghi âm hoặc chụp hình trong buổi hội thảo.",
    "Nội dung hội thảo có thể bị thay đổi."
  ]
} as const;

export const COMPANY_SIZES = [
  "0 - 10",
  "10 - 50",
  "50 - 100",
  "100 - 200",
  "200+"
] as const;

export const JOB_ROLES = [
  "CEO / Founder",
  "Quản lý vận hành / Trưởng bộ phận",
  "IT / IT kiêm nhiệm"
] as const;

export function formatDate(dateStr: string): string {
  return dateStr;
}

export function formatTime(timeStr: string): string {
  return timeStr;
}
