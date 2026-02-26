import { Badge } from "@/components/ui/badge"

export const sections = [
  {
    id: 'hero',
    subtitle: <Badge variant="outline" className="text-white border-white">Новая коллекция 2026</Badge>,
    title: "Одевайся. Выделяйся.",
    showButton: true,
    buttonText: 'Смотреть коллекцию'
  },
  {
    id: 'about',
    title: 'Стиль — это ты.',
    content: 'Мы создаём одежду для тех, кто ценит качество и современный дизайн. Каждая вещь — это история, которую ты рассказываешь без слов.'
  },
  {
    id: 'features',
    title: 'Категории',
    content: ''
  },
  {
    id: 'testimonials',
    title: 'Нас выбирают',
    content: 'Тысячи покупателей уже нашли свой стиль. Быстрая доставка, удобный возврат и гарантия качества на каждый заказ.'
  },
  {
    id: 'join',
    title: 'Готов обновить гардероб?',
    content: 'Оформи заказ прямо сейчас — доставим в течение 2-3 дней. Бесплатная доставка при заказе от 3000 ₽.',
    showButton: true,
    buttonText: 'Заказать сейчас'
  },
]