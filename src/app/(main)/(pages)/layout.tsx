import HeaderBar from "@/components/headerbar";
import { checkUser } from "@/lib/data/user";
type Props = { children: React.ReactNode };
const Layout = async ({ children }: Props) => {
  const user = await checkUser();
  return (
        <aside className="w-full border-l-[1px] h-screen CardStyle border-t-[1px] border-muted-foreground/20 overflow-scroll">
          <HeaderBar />
          {children}
        </aside>
  );
};

export default Layout;
