import React, { useState } from "react";
import { Header } from "@/components/Header"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import api
from "@/lib/axios";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
const LogPage = () => {
    const [userName, setUserName] = useState("")
    const [pasw, setPasw] = useState("")
    const navigate = useNavigate()
    // hàm sử lý log
    const handleLog = async (log=true) => {
        if (!userName || !pasw) {
            toast.error("Vui lòng nhập đủ username và password!");
            return }
        if (log){
            try{
            const res = await api.post("/tasks/login", {"userName": userName, "pasw": pasw, "lastLogin": new Date()})
            if (res.data.message){
               toast.success(`Đăng nhập thành công! Chào mừng ${res.data.user.userName}`)
               navigate("/", { state: { user: res.data.user.userName } });
               return 
            }
            toast.error(`Đăng nhập thất bại`)               
            }catch(error){
                toast.error("Lỗi đăng nhập")
                console.error("Lỗi đăng nhập")
            }} else {
                    try{
                    const res = await api.post("/tasks/signup", {"userName": userName, "pasw": pasw, "lastLogin": new Date()})
                    toast.success(`Đăng kí thành công!, Chào mừng ${res.data.user}`)
                    navigate("/", { state: { user: res.data.user } });
                    }catch(error){
                        toast.error("Lỗi đăng kí")
                        console.error("Lỗi đăng kí")
                    }
            }
              
    }
    return(
    <div className="min-h-screen w-full bg-[#fefcff] relative">
      {/* Dreamy Sky Pink Glow */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        radial-gradient(circle at 30% 70%, rgba(173, 216, 230, 0.35), transparent 60%),
        radial-gradient(circle at 70% 30%, rgba(255, 182, 193, 0.4), transparent 60%)`,
        }}
      />
      {/* Your Content/Components */}
        <div className="container relative z-10 pt-8 mx-auto">
            <div className="w-full max-w-2xl p-6 mx-auto space-y-6">
                {/* Đầu Trang */}
                <Header/>
            {/* Khung đăng nhập - đăng kí*/}
            <div className="w-full max-w-md p-6 mx-auto space-y-6">
                {/* username */}
                <Card className="p-6 border-0 bg-gradient-card shadow-custom-lg">
                <div className="flex flex-col gap-3 sm:flex-row">
                    <Input
                    type="text"
                    placeholder="UserName"
                    className="h-12 text-base bg-slate-50 sm:flex-1 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                    value={userName}
                    onChange={(even) => setUserName(even.target.value)}
                    />
                </div>
                </Card>
                {/* pasw */}
                <Card className="p-6 border-0 bg-gradient-card shadow-custom-lg">
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Input
                        type="text"
                        placeholder="Pasw"
                        className="h-12 text-base bg-slate-50 sm:flex-1 border-border/50 focus:border-primary/50 focus:ring-primary/20"
                        value={pasw}
                        onChange={(even) => setPasw(even.target.value)}
                        />
                    </div>
                </Card>
                <div className="flex flex-col max-w-md gap-3 sm:flex-row mx-auto">
                    <Button
                    variant="gradient"
                    size="xl"
                    className="px-6"
                    onClick={handleLog}
                    >
                    Đăng Nhập
                    </Button>

                    <Button
                    variant="gradient"
                    size="xl"
                    className="px-6"
                    onClick={() => handleLog(false)}
                    >
                    Đăng ký   
                    </Button>
                </div>
            </div>
            </div>
        </div>
    </div>
    )
}
export default LogPage