
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from '@headlessui/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Products',
        href: '/products',
    },
];

interface Product {
    id: number;
    name: string;
    description: string;
    stock:number;
    price: number;
}

export default function Index({products}: {products: Product[]}) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Products | List" />
            <div className='m-4'>
                <Link href={('products/create')}>
                    <Button className='mb-4'>
                        Crear Producto
                    </Button>
                </Link>
                {products.length > 0 &&(
                <Table>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Nombre</TableHead>
                    <TableHead>Descripcion</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Precio</TableHead>
                    <TableHead className="text-right">Acciones</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {products.map((product)=> (
                    <TableRow key={product.id}>
                        <TableCell className="font-medium">{product.id}</TableCell>
                        <TableCell>{product.name}</TableCell>
                        <TableCell>{product.description}</TableCell>
                        <TableCell>{product.stock}</TableCell>
                        <TableCell>{product.price}</TableCell>
                        <TableCell className="text-right"></TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            )}
            </div>  
        </AppLayout>
    );
}
