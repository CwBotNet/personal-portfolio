import { Button } from "../ui/button";
import {
  BookUser,
  Cloud,
  CreditCard,
  Github,
  HelpCircle,
  Keyboard,
  LayoutDashboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  MessageSquareShare,
  Plus,
  PlusCircle,
  Settings,
  Settings2,
  User,
  UserPlus,
  Users,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Image from "next/image";
const Sidebar = () => {
  const navigation = [
    {
      href: "/dashboard",
      name: "Dashboard",
      icon: (
        <LayoutDashboard />
      ),
    },
    {
      href: "/dashboard/profile",
      name: "Profile",
      icon: (
        <User />
      ),
    },
    {
      href: "/dashboard/testimonials",
      name: "Testimonial",
      icon: (
        <MessageSquareShare />
      ),
    },
    {
      href: "/dashboard/bio",
      name: "Bio",
      icon: (
        <BookUser />
      ),
    },
  ];

  const navsFooter = [
    {
      href: "#",
      name: "Help",
      icon: (
        <HelpCircle size={18} />
      ),
    },
    {
      href: "#",
      name: "Settings",
      icon: (
        <Settings2 size={18} />
      ),
    },
    {
      href: "#",
      name: "Logout",
      icon: (
        <LogOut size={18} />
      ),
    },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-20 h-full border-r bg-black border-none space-y-8">
        <div className="flex flex-col h-full">
          <div className="h-20 flex items-center justify-center px-8">
            <a href="/dashboard" className="flex-none">
              <Image
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                width={35}
                height={35}
                alt="user image"
                className="mx-auto rounded-2xl"
              />
            </a>
          </div>
          <div className="flex-1 flex flex-col h-full">
            <ul className="px-4 text-sm font-medium flex-1">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="relative flex items-center justify-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150 group"
                  >
                    <div className="text-gray-500">{item.icon}</div>
                    <span className="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div>
              <ul className="px-4 pb-4 text-sm font-medium">
                {navsFooter.map((item, idx) => (
                  <li key={idx}>
                    <a
                      href={item.href}
                      className="relative flex items-center justify-center gap-x-2 text-gray-600 p-2 rounded-lg  hover:bg-gray-50 active:bg-gray-100 duration-150 group"
                    >
                      <div className="text-gray-500">{item.icon}</div>
                      <span className="absolute left-14 p-1 px-1.5 rounded-md whitespace-nowrap text-xs text-white bg-gray-800 hidden group-hover:inline-block group-focus:hidden duration-150">
                        {item.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="relative py-4 px-2 ">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="secondary">Menu</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 border-2 border-black/50 bg-black rounded-xl ml-24">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <CreditCard className="mr-2 h-4 w-4" />
                        <span>Billing</span>
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Keyboard className="mr-2 h-4 w-4" />
                        <span>Keyboard shortcuts</span>
                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                      <DropdownMenuItem>
                        <Users className="mr-2 h-4 w-4" />
                        <span>Team</span>
                      </DropdownMenuItem>
                      <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                          <UserPlus className="mr-2 h-4 w-4" />
                          <span>Invite users</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                          <DropdownMenuSubContent>
                            <DropdownMenuItem>
                              <Mail className="mr-2 h-4 w-4" />
                              <span>Email</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <MessageSquare className="mr-2 h-4 w-4" />
                              <span>Message</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <PlusCircle className="mr-2 h-4 w-4" />
                              <span>More...</span>
                            </DropdownMenuItem>
                          </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                      </DropdownMenuSub>
                      <DropdownMenuItem>
                        <Plus className="mr-2 h-4 w-4" />
                        <span>New Team</span>
                        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                      </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <Github className="mr-2 h-4 w-4" />
                      <span>GitHub</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <LifeBuoy className="mr-2 h-4 w-4" />
                      <span>Support</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem disabled>
                      <Cloud className="mr-2 h-4 w-4" />
                      <span>API</span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                      <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;