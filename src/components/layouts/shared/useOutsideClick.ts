import { useEffect } from 'react'

// กำหนดประเภทของ ref เป็น React.RefObject<HTMLElement> เพื่อรองรับการอ้างอิงองค์ประกอบ HTML
// กำหนดประเภทของ callback เป็น () => void เพื่อระบุว่าเป็นฟังก์ชันที่ไม่รับพารามิเตอร์และไม่คืนค่า
const useOutsideClick = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
  const handleClick = (e: MouseEvent) => {
    // ตรวจสอบว่ามี ref ปัจจุบัน (current) และ e.target ไม่อยู่ใน ref นั้น
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback()
    }
  }

  useEffect(() => {
    // เพิ่ม event listener เมื่อ component mount
    document.addEventListener("click", handleClick)

    // ลบ event listener เมื่อ component unmount
    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [ref, callback]) // เพิ่ม dependencies เพื่อให้ useEffect รู้ว่าเมื่อไหร่ต้องเรียกใหม่
}

export default useOutsideClick
