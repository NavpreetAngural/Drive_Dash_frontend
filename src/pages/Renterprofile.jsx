import React, { useState, useEffect } from 'react';
import { Card, Typography, Space, Modal, Form, Row, Col, Input, Select, Button, Radio } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import axios from 'axios';
import axiosinstance from '../../axiosinstance';
import { baseURL } from '../../config';
import { MdEdit } from 'react-icons/md';
import { toast } from 'react-toastify';

const { Title, Text } = Typography;

const Renterprofile = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [user, setUser] = useState(null);
  const email = localStorage.getItem('email');
  const [form] = Form.useForm()

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${baseURL}/auth/renterprofile/${email}`);
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, [email]);

  const handleEdit = (user) => {
    setIsModalOpen(true)
    form.setFieldsValue(user);
  }

  const handleCancel = () => {
    setIsModalOpen(false)
    form.resetFields()
  }

  const onFinish = async (values) => {
    try {
      await axiosinstance.put(`${baseURL}/auth/update/${user._id}`, values);
      toast.success("User updated successfully");
      setIsModalOpen(false); // close modal on success
      setUser({ ...user, ...values }); // update local state
    } catch (err) {
      console.error(err.response?.data?.message || "Something went wrong.");
    }
  }

  if (!user) return <div className="mt-10 text-center">User not found</div>;

  return (
    <div className="flex justify-center items-center w-full !px-4">
      <Card className="w-full sm:w-3/4 md:w-2/3 lg:w-1/3 !my-10 rounded-2xl shadow-lg border border-gray-200">
        <div className="flex flex-col items-center text-center space-y-4 p-6">
          <Title level={3} className="!mb-0 flex items-center gap-2">
            {user.fullname}
            <MdEdit
              className="text-blue-600 cursor-pointer"
              size={20}
              onClick={() => handleEdit(user)}
            />
          </Title>
          <Text type="secondary" className="text-lg">{user.role}</Text>

          <Space direction="vertical" size={6} className="text-sm text-gray-700 mt-5">
            <span><MailOutlined className="mr-2" /> {user.email}</span>
            <span><PhoneOutlined className="mr-2" /> {user.phone}</span>
            <span><EnvironmentOutlined className="mr-2" /> {user.address}</span>
          </Space>

          <Space size="middle" className="mt-6">
            <a href={user.github} target="_blank" rel="noopener noreferrer">
              <GithubOutlined className="text-2xl text-gray-700 hover:text-black transition" />
            </a>
            <a href={user.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedinOutlined className="text-2xl text-gray-700 hover:text-blue-600 transition" />
            </a>
          </Space>
        </div>
      </Card>
      <center>
        <Modal
          title={"Edit Details"}
          width={500}
          footer={null}
          open={isModalOpen}
          onCancel={handleCancel}
        >
          <Form
            form={form}
            name="register"
            onFinish={onFinish}
            style={{
              maxWidth: 800,
              paddingTop: "10px"
            }}
            initialValues={{
              role: 'hirer', // default value
            }}
          >

            <Form.Item
              name="fullname"
              label="Full Name"
              rules={[
                {
                  required: true,
                  message: 'Please input your Fullname!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  required: true,
                  message: 'Please input your email!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              label="Role"
              name="role"
              rules={[{ message: "Please select Role!", required: true, }]}
            >
              <Select placeholder="Choose user Role" >
                <Option value="renter">Renter</Option>
                <Option value="hirer">Hirer</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: 'Please input your phone number!',
                },
              ]}
            >
              <Input maxLength={10} minLength={10} />
            </Form.Item>

            <Form.Item
              name="gender"
              label="Gender"
              rules={[
                {
                  required: true,
                  message: 'Please input your gender!',
                },
              ]}
            >
              <Radio.Group>
                <Radio value="Male">Male</Radio>
                <Radio value="Female">Female</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item
              name="address"
              label="Address"
              rules={[
                {
                  required: true,
                  message: 'Please input your address!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            {/* <Form.Item
                    name="agreement"
                    valuePropName="checked"
                    rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                        },
                    ]}
                >
                    <Checkbox>
                        I have read the <NavLink to=''>agreement</NavLink>
                    </Checkbox>
                </Form.Item> */}
            <Form.Item >
              <Button type="primary" htmlType="submit">
                Update
              </Button>
              {/* <span style={{ marginLeft: "10px" }}>If registered , <NavLink to="/login"> Login </NavLink></span> */}
            </Form.Item>
            {/* <Form.Item>
                    <button
                        onClick={googleLogin}
                        className="flex items-center justify-center gap-2 w-full text-[#000] bg-white border border-gray-300 rounded-md py-2 font-medium hover:bg-gray-100 transition mb-4"
                    >
                        <img src="https://developers.google.com/identity/images/g-logo.png" alt="G" className="w-5 h-5" />
                        Continue with Google
                    </button>
                </Form.Item> */}
          </Form>

        </Modal>
      </center>
    </div>
  );
};

export default Renterprofile;
