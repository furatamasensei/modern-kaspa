import Logo from './logo'

export default function Footer() {
  return (
    <div className="bg-background/70 backdrop-blur-md border-t">
      <div className="container mx-auto p-4 px-0">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <Logo className="w-auto h-16" />
          <div className="text-sm text-muted-foreground">
            Copyright &copy; {new Date().getFullYear()} &mdash; Kaspa Community
          </div>
        </div>
      </div>
    </div>
  )
}
