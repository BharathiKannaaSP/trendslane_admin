'use client'
import React from 'react'
import {
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle
} from '@/components/ui/sheet'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from './ui/form'
import { Input } from './ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from './ui/select'
import { Button } from './ui/button'

const formSchema = z.object({
	username: z
		.string()
		.min(2, { message: 'Username must be at least 2 characters!' })
		.max(50),
	email: z.string().email({ message: 'Invalid email address!' }),
	fullName: z
		.string()
		.min(2, { message: 'Full name must be at least 2 characters!' })
		.max(50),
	phone: z
		.string()
		.min(10, { message: 'Phone number must be at least 10 characters!' })
		.max(15),
	location: z.string().min(2).max(50),
	role: z.enum(['admin', 'user'])
})

const EditUser = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: 'rachel',
			email: 'rachel@gmail.com',
			fullName: 'Rachel Green',
			phone: '+91 633680011',
			location: 'India',
			role: 'admin'
		}
	})

	return (
		<SheetContent>
			<SheetHeader>
				<SheetTitle className='mb-4'>Edit User</SheetTitle>
				<SheetDescription asChild>
					<Form {...form}>
						<form className='space-y-8'>
							<FormField
								control={form.control}
								name='username'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Username</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormDescription>
											This is your public username.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormDescription>
											Only admin can see your email.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='fullName'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Full Name</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormDescription>
											Only admin can see your full name.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='phone'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Phone</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormDescription>
											Only admin can see your phone number.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='location'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Location</FormLabel>
										<FormControl>
											<Input {...field} />
										</FormControl>
										<FormDescription>
											This is your public location.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>

							<FormField
								control={form.control}
								name='role'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Role</FormLabel>
										<FormControl>
											<Select>
												<SelectTrigger className='w-full'>
													<SelectValue placeholder='Role' />
												</SelectTrigger>
												<SelectContent>
													<SelectItem value='admin'>Admin</SelectItem>
													<SelectItem value='user'>User</SelectItem>
												</SelectContent>
											</Select>
										</FormControl>
										<FormDescription>
											Only verified users can be admin.
										</FormDescription>
										<FormMessage />
									</FormItem>
								)}
							/>
							<Button type='submit'>Submit</Button>
						</form>
					</Form>
				</SheetDescription>
			</SheetHeader>
		</SheetContent>
	)
}

export default EditUser
