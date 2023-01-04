import {
  Approval as ApprovalEvent,
  CancelLongTermOrder as CancelLongTermOrderEvent,
  InitialLiquidityProvided as InitialLiquidityProvidedEvent,
  InstantSwapAToB as InstantSwapAToBEvent,
  InstantSwapBToA as InstantSwapBToAEvent,
  LiquidityProvided as LiquidityProvidedEvent,
  LiquidityRemoved as LiquidityRemovedEvent,
  LongTermSwapAToB as LongTermSwapAToBEvent,
  LongTermSwapBToA as LongTermSwapBToAEvent,
  Transfer as TransferEvent,
  WithdrawProceedsFromLongTermOrder as WithdrawProceedsFromLongTermOrderEvent
} from "../generated/Pair/Pair"
import {
  Approval,
  CancelLongTermOrder,
  InitialLiquidityProvided,
  InstantSwapAToB,
  InstantSwapBToA,
  LiquidityProvided,
  LiquidityRemoved,
  LongTermSwapAToB,
  LongTermSwapBToA,
  Transfer,
  WithdrawProceedsFromLongTermOrder
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCancelLongTermOrder(
  event: CancelLongTermOrderEvent
): void {
  let entity = new CancelLongTermOrder(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.addr = event.params.addr
  entity.orderId = event.params.orderId
  entity.unsoldAmount = event.params.unsoldAmount
  entity.purchasedAmount = event.params.purchasedAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialLiquidityProvided(
  event: InitialLiquidityProvidedEvent
): void {
  let entity = new InitialLiquidityProvided(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.addr = event.params.addr
  entity.lpTokenAmount = event.params.lpTokenAmount
  entity.amountA = event.params.amountA
  entity.amountB = event.params.amountB

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInstantSwapAToB(event: InstantSwapAToBEvent): void {
  let entity = new InstantSwapAToB(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.addr = event.params.addr
  entity.amountAIn = event.params.amountAIn
  entity.amountBOut = event.params.amountBOut

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInstantSwapBToA(event: InstantSwapBToAEvent): void {
  let entity = new InstantSwapBToA(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.addr = event.params.addr
  entity.amountBIn = event.params.amountBIn
  entity.amountAOut = event.params.amountAOut

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLiquidityProvided(event: LiquidityProvidedEvent): void {
  let entity = new LiquidityProvided(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.addr = event.params.addr
  entity.lpTokenAmount = event.params.lpTokenAmount
  entity.amountAIn = event.params.amountAIn
  entity.amountBIn = event.params.amountBIn

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLiquidityRemoved(event: LiquidityRemovedEvent): void {
  let entity = new LiquidityRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.addr = event.params.addr
  entity.lpTokenAmount = event.params.lpTokenAmount
  entity.amountAOut = event.params.amountAOut
  entity.amountBOut = event.params.amountBOut

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLongTermSwapAToB(event: LongTermSwapAToBEvent): void {
  let entity = new LongTermSwapAToB(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.addr = event.params.addr
  entity.amountAIn = event.params.amountAIn
  entity.orderId = event.params.orderId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLongTermSwapBToA(event: LongTermSwapBToAEvent): void {
  let entity = new LongTermSwapBToA(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.addr = event.params.addr
  entity.amountBIn = event.params.amountBIn
  entity.orderId = event.params.orderId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawProceedsFromLongTermOrder(
  event: WithdrawProceedsFromLongTermOrderEvent
): void {
  let entity = new WithdrawProceedsFromLongTermOrder(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.addr = event.params.addr
  entity.orderId = event.params.orderId
  entity.proceeds = event.params.proceeds

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
