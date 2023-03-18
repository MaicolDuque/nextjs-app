import { useRouter } from "next/router"

export default function SupplierDetail(){
  const router = useRouter()
	const { supplierId } = router.query
  return(
    <>
    Supplier Detail {supplierId}
    </>
  )
}
