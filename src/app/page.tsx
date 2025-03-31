export default function Home() {
    return (
        <div>
            {/*  居中展示超链接方块  */}
            <div className="flex justify-center items-center h-screen">
                <a
                    href="https://holiday.meta-p.com"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    点击跳转日历
                </a>
            </div>
        </div>
    );
}
