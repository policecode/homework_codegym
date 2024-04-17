import Department from "../components/hook/Department";

export default function DepartmentLayout({children}) {
    return (
        <>
            <Department />
            {children}
        </>
    )
}