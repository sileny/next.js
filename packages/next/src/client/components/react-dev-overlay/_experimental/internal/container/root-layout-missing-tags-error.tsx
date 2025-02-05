import { useCallback } from 'react'
import { HotlinkedText } from '../components/hot-linked-text'
import { ErrorOverlayLayout } from '../components/errors/error-overlay-layout/error-overlay-layout'
import type { ErrorBaseProps } from '../components/errors/error-overlay/error-overlay'

interface RootLayoutMissingTagsErrorProps extends ErrorBaseProps {
  missingTags: string[]
}

export function RootLayoutMissingTagsError({
  missingTags,
  ...props
}: RootLayoutMissingTagsErrorProps) {
  const noop = useCallback(() => {}, [])
  return (
    <ErrorOverlayLayout
      errorType="Missing Required HTML Tag"
      errorMessage={
        <HotlinkedText
          text={`The following tags are missing in the Root Layout: ${missingTags
            .map((tagName) => `<${tagName}>`)
            .join(
              ', '
            )}.\nRead more at https://nextjs.org/docs/messages/missing-root-layout-tags`}
        />
      }
      onClose={noop}
      {...props}
    />
  )
}
