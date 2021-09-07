import * as React from 'react'
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons'

import { FormContainer } from '../../../../../utils/form/FormContainer'
import { InputField } from '../../../../../utils/form/inputField'

export const RegisterForm: React.FunctionComponent = (): JSX.Element => (
	<FormContainer
		formInputs={[
			{
				type: 'text',
				placeholder: 'Username',
				name: 'username',
				prefix: (
					<UserOutlined
						type={undefined}
						translate={undefined}
						onAuxClick={undefined}
						onAuxClickCapture={undefined}
						style={{ color: 'rgba(0,0,0,.25)' }}
					/>
				) as any,
				component: InputField
			},
			{
				type: 'text',
				placeholder: 'Email',
				name: 'email',
				prefix: (
					<MailOutlined
						type={undefined}
						translate={undefined}
						onAuxClick={undefined}
						onAuxClickCapture={undefined}
						style={{ color: 'rgba(0,0,0,.25)' }}
					/>
				) as any,
				component: InputField
			},
			{
				name: 'password',
				type: 'password',
				prefix: (
					<LockOutlined
						type={undefined}
						translate={undefined}
						onAuxClick={undefined}
						onAuxClickCapture={undefined}
						style={{ color: 'rgba(0,0,0,.25)' }}
					/>
				) as any,
				placeholder: 'Password',
				component: InputField
			}
		]}
	/>
)
