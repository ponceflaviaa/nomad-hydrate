'use client'

import Image from 'next/image'
import { useState, type ChangeEvent, type FormEvent } from 'react'
import { Dialog } from '@base-ui/react/dialog'
import { TriangleAlert, X } from 'lucide-react'
import { toast } from 'sonner'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

type PaymentDetails = {
  cardholder: string
  cardNumber: string
  expiration: string
  cvv: string
}

const emptyPaymentDetails: PaymentDetails = {
  cardholder: '',
  cardNumber: '',
  expiration: '',
  cvv: '',
}

const testPrice = 24990
const formattedPrice = new Intl.NumberFormat('es-AR', {
  style: 'currency',
  currency: 'ARS',
  maximumFractionDigits: 0,
}).format(testPrice)

function PaymentMethods() {
  return (
    <div className="payment-methods" role="group" aria-label="Medios de pago admitidos">
      <Badge variant="outline" className="payment-badge payment-badge--visa">VISA</Badge>
      <Badge variant="outline" className="payment-badge payment-badge--mastercard">Mastercard</Badge>
      <Badge variant="outline" className="payment-badge payment-badge--amex" aria-label="American Express">AMEX</Badge>
      <Badge variant="outline" className="payment-badge payment-badge--mercado">Mercado Pago</Badge>
    </div>
  )
}

function ProductSummary() {
  return (
    <section className="checkout-product" aria-label="Resumen de compra">
      <div className="checkout-thumbnail">
        <Image
          src="/bottle.webp"
          alt="Botella azul Nomade Hydrate"
          width={42}
          height={68}
          className="checkout-thumbnail-image"
        />
      </div>
      <div className="checkout-product-details">
        <div className="checkout-product-name">
          <strong>Botella Nomade Hydrate</strong>
          <span>Precio unitario</span>
        </div>
        <strong className="checkout-unit-price">{formattedPrice}</strong>
        <div className="checkout-total">
          <span>Total</span>
          <strong>{formattedPrice}</strong>
        </div>
      </div>
    </section>
  )
}

export function CheckoutExperience() {
  const [isOpen, setIsOpen] = useState(false)
  const [payment, setPayment] = useState(emptyPaymentDetails)

  function updatePayment(field: keyof PaymentDetails, value: string) {
    setPayment((current) => ({ ...current, [field]: value }))
  }

  function handleCardNumberChange(event: ChangeEvent<HTMLInputElement>) {
    const digits = event.target.value.replace(/\D/g, '').slice(0, 16)
    updatePayment('cardNumber', digits.replace(/(\d{4})(?=\d)/g, '$1 '))
  }

  function handleExpirationChange(event: ChangeEvent<HTMLInputElement>) {
    const digits = event.target.value.replace(/\D/g, '').slice(0, 4)
    updatePayment('expiration', digits.length > 2 ? `${digits.slice(0, 2)}/${digits.slice(2)}` : digits)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // This fictional checkout validates locally and never sends or stores card details.
    if (payment.cardNumber.replace(/\D/g, '').length !== 16) return

    setPayment(emptyPaymentDetails)
    setIsOpen(false)
    toast.success('¡Pago de prueba realizado con éxito! Gracias por tu compra para IGTP.')
  }

  return (
    <div className="hero-cta-cluster">
      <Dialog.Root
        open={isOpen}
        onOpenChange={(open) => {
          setIsOpen(open)
          if (!open) setPayment(emptyPaymentDetails)
        }}
      >
        <Dialog.Trigger
          render={
            <Button type="button" variant="lime" size="lg" className="promo-tile">
              Elegir mi botella
            </Button>
          }
        />

        <Dialog.Portal>
          <Dialog.Backdrop className="checkout-backdrop" />
          <Dialog.Popup className="checkout-popup">
            <header className="checkout-header">
              <div>
                <Dialog.Title className="checkout-title">Finalizar Compra - Nomade Hydrate</Dialog.Title>
                <Dialog.Description className="sr-only">
                  Checkout ficticio de prueba. No ingreses datos reales.
                </Dialog.Description>
              </div>
              <Dialog.Close
                render={
                  <Button type="button" variant="ghost" size="icon" className="checkout-close" aria-label="Cerrar checkout">
                    <X aria-hidden="true" />
                  </Button>
                }
              />
            </header>

            <Alert className="checkout-alert">
              <TriangleAlert className="checkout-alert-symbol" aria-hidden="true" />
              <AlertDescription className="checkout-alert-copy">
                Entorno de prueba ficticio para la materia Sitios Web (IGTP). No se procesarán cobros reales. No ingreses datos reales.
              </AlertDescription>
            </Alert>

            <ProductSummary />

            <form className="checkout-form" onSubmit={handleSubmit}>
              <fieldset className="checkout-fields">
                <legend className="sr-only">Datos de pago de prueba</legend>

                <label className="checkout-field">
                  <span>Nombre en la tarjeta</span>
                  <Input
                    className="checkout-input"
                    type="text"
                    value={payment.cardholder}
                    onChange={(event) => updatePayment('cardholder', event.target.value)}
                    placeholder="Como aparece en la tarjeta"
                    autoComplete="off"
                    maxLength={60}
                    minLength={2}
                    required
                  />
                </label>

                <div className="checkout-card-field">
                  <PaymentMethods />
                  <label className="checkout-field">
                    <span>Número de tarjeta</span>
                    <Input
                      className="checkout-input"
                      type="text"
                      inputMode="numeric"
                      value={payment.cardNumber}
                      onChange={handleCardNumberChange}
                      placeholder="•••• •••• •••• ••••"
                      autoComplete="off"
                      maxLength={19}
                      pattern="[0-9]{4}( [0-9]{4}){3}"
                      title="Ingresá 16 dígitos de prueba."
                      required
                    />
                  </label>
                </div>

                <div className="checkout-field-row">
                  <label className="checkout-field">
                    <span>Vencimiento</span>
                    <Input
                      className="checkout-input"
                      type="text"
                      inputMode="numeric"
                      value={payment.expiration}
                      onChange={handleExpirationChange}
                      placeholder="MM/AA"
                      autoComplete="off"
                      maxLength={5}
                      pattern="(0[1-9]|1[0-2])/[0-9]{2}"
                      title="Usá el formato MM/AA."
                      required
                    />
                  </label>
                  <label className="checkout-field">
                    <span>CVV</span>
                    <Input
                      className="checkout-input"
                      type="text"
                      inputMode="numeric"
                      value={payment.cvv}
                      onChange={(event) => updatePayment('cvv', event.target.value.replace(/\D/g, '').slice(0, 4))}
                      placeholder="•••"
                      autoComplete="off"
                      maxLength={4}
                      pattern="[0-9]{3,4}"
                      required
                    />
                  </label>
                </div>
              </fieldset>

              <div className="checkout-actions">
                <Dialog.Close
                  render={
                    <Button type="button" variant="outline" className="checkout-cancel">
                      Cancelar
                    </Button>
                  }
                />
                <Button type="submit" variant="lime" className="checkout-submit">
                  Pagar ahora (Simulación)
                </Button>
              </div>
            </form>
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>

      <div className="w-64 overflow-hidden relative mx-auto [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
  <p 
    className="whitespace-nowrap text-xs italic text-white font-medium inline-block"
    style={{
      animation: 'marquee 7s linear infinite'
    }}
  >
    Envío gratis en tu primer pedido
  </p>

  <style jsx>{`
    @keyframes marquee {
      0% { transform: translateX(100%); }
      100% { transform: translateX(-100%); }
    }
  `}</style>
</div>
    
    </div>
  )
}
