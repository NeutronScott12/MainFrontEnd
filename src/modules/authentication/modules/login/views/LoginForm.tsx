import * as React from 'react'
import styled from 'styled-components'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import { InputField } from '../../../../../utils/form/inputField'
import { FormContainer } from '../../../../../utils/form/FormContainer'
import { Link } from 'react-router-dom'

const LoginFormLayout = styled.div`
	width: 60%;
	margin: auto;

	@media (max-width: 700px) {
		width: 100%;
	}
`

export const LoginForm: React.FunctionComponent = (): JSX.Element => (
	<LoginFormLayout>
		<FormContainer
			formInputs={[
				{
					type: 'text',
					name: 'email',
					placeholder: 'Email',
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
					type: 'password',
					name: 'password',
					placeholder: 'Password',
					prefix: (
						<LockOutlined
							type={undefined}
							translate={undefined}
							onAuxClick={undefined}
							onAuxClickCapture={undefined}
							style={{ color: 'rgba(0,0,0,.25)' }}
						/>
					) as any,
					component: InputField
				}
			]}
		/>
		<Link to="/auth/forgot_password">Forgot Password</Link>
	</LoginFormLayout>
)
