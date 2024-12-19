'use client'

import { AppConfig } from '@/model/AppConfig'
import { BlockInformation } from '@/model/BlockInformation'
import { useState } from 'react'
import Dag from '../dag/Dag'
import Canvas from './graph-inspector/Canvas'

const dag = new Dag()

export default function GraphInspector() {
  const [blockInformationState, setBlockInformationState] =
    useState<BlockInformation | null>(null)
  const [, setAppConfig] = useState<AppConfig | null>(null)
  const [wasBlockSetState, setWasBlockSetState] = useState(false)
  const [
    wasBlockInformationPanelCloseRequested,
    setBlockInformationPanelCloseRequested,
  ] = useState(false)
  const [, setBlockInformationPanelOpenState] = useState(false)

  dag.setBlockInformationChangedListener((blockInformation) => {
    const hasBlockChanged =
      blockInformation?.block.blockHash !==
      blockInformationState?.block.blockHash

    // Reset close requests if the block changed
    if (hasBlockChanged) {
      setBlockInformationPanelCloseRequested(false)
    }

    setBlockInformationPanelOpenState(
      blockInformation !== null &&
        (!wasBlockInformationPanelCloseRequested || hasBlockChanged),
    )

    // Only set the target block if it exists to prevent text in an already
    // open panel from disappearing on close
    if (blockInformation) {
      setBlockInformationState(blockInformation)
    }

    // This prevents the panel slide-out animation from occurring on page load
    setWasBlockSetState(wasBlockSetState || blockInformation !== null)
  })

  dag.setAppConfigChangedListener((appConfig) => {
    setAppConfig(appConfig)
  })

  dag.setBlockClickedListener((block) => {
    setBlockInformationPanelOpenState(!!block)
    setBlockInformationPanelCloseRequested(!block)
  })

  return <Canvas dag={dag} />
}
