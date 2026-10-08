import { siteConfig } from '@/lib/config'

/**
 * 页脚
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate =
    parseInt(since) < currentYear ? since + '–' + currentYear : currentYear

  return (
    <footer className='w-full border-t border-gray-200 bg-white px-6 py-8 text-center text-sm text-gray-500 dark:border-gray-800 dark:bg-black dark:text-gray-400'>
      <div className='mx-auto max-w-4xl'>
        &copy; {copyrightDate} {siteConfig('AUTHOR')}
      </div>
    </footer>
  )
}
