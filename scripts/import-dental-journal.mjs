import { writeFileSync, mkdirSync, unlinkSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'src', 'content', 'blog');
mkdirSync(outDir, { recursive: true });

const posts = [
  {
    slug: 'week-1-why-im-starting-a-dental-blog',
    title: "Week 1 – Why I'm Starting a Dental Blog in High School",
    description: 'Why dentistry interests me and why I want to document my journey from freshman year.',
    date: '2026-01-07',
    body: `Dentistry interests me because it combines science with direct impact on people's everyday lives. Oral health affects more than just teeth, it plays a role in confidence, comfort, and overall health. I've always been interested in biology and health-related topics, and dentistry stood out to me as a field where small details and careful work can make a big difference. I also like that dentistry is hands-on and requires precision, patience, and strong problem-solving skills. Knowing that dentists can help someone feel better about their smile and health at the same time is what really drew me to this career path.

I decided to start this blog because I want to document my journey from the very beginning. As a freshman in high school, I know I'm at an early stage, but I think that makes this process even more meaningful. Writing about my goals, activities, and experiences will help me stay organized and intentional about pursuing dentistry. It will also hold me accountable and give me a way to reflect on what I'm learning, what interests me most, and how my understanding of dentistry changes over time.

In the long term, I hope to learn more about what being a dentist actually involves beyond what we see as patients. I want to explore different dental specialties, understand the education and training required, and gain exposure to real-world dental settings through volunteering, shadowing, or hands-on projects. I also want to learn more about oral health education and how dentists can positively impact their communities.`,
  },
  {
    slug: 'week-2-what-most-people-get-wrong-about-oral-health',
    title: 'Week 2 – What Most People Get Wrong About Oral Health',
    description: 'Common misconceptions about oral health and its connection to overall health.',
    date: '2026-01-14',
    body: `When most people think about oral health, they usually think it just means brushing your teeth twice a day and not eating too much sugar. While those things matter, oral health is actually much more connected to overall health than people realize.

One common misconception is that oral health problems only stay in your mouth. In reality, issues like gum disease have been linked to heart disease, diabetes, and other systemic health problems. The mouth is the entry point to the body, and bacteria from the gums can travel through the bloodstream if oral hygiene is poor.

Another thing people often overlook is gum health. Many people focus on teeth whitening or avoiding cavities but ignore signs like bleeding gums. Bleeding gums are not "normal" — they're often an early sign of gingivitis, which can worsen if not treated.

Access to dental care is also something people don't think about enough. Preventive care like cleanings and checkups can stop problems before they become painful or expensive, but not everyone has equal access to these services. This is one reason oral health education and outreach are so important.

Learning more about oral health has made me realize that dentistry isn't just about fixing teeth — it's about prevention, education, and improving overall quality of life. That's something I hope to continue exploring through this blog.`,
  },
  {
    slug: 'week-3-oral-health-confidence-mental-health',
    title: 'Week 3 – How Oral Health Connects to Confidence and Mental Health',
    description: 'How oral health affects confidence, self-esteem, and mental health for students.',
    date: '2026-01-21',
    body: `Oral health affects more than just physical well-being — it can have a huge impact on confidence and mental health, especially for students.

Smiling is a big part of how we communicate. When someone feels insecure about their teeth, they may avoid smiling, speaking up, or social situations altogether. This can slowly affect self-esteem and how someone interacts with others.

For younger students, dental issues like visible cavities or misaligned teeth can sometimes lead to teasing or embarrassment. Over time, this can impact confidence in school, friendships, and even academic participation.

What's interesting is that many of these issues are preventable with early education and access to care. Something as simple as learning proper brushing techniques or having access to regular dental checkups can make a long-term difference in how someone feels about themselves.

Thinking about dentistry through this lens has helped me see it as more than a medical profession. Dentists don't just improve oral health — they help people feel comfortable, confident, and heard. That's one of the reasons I'm interested in learning more about dentistry and sharing what I learn through this blog.`,
  },
  {
    slug: 'week-4-representation-in-dentistry',
    title: 'Week 4 – Why Representation in Dentistry Matters to Me',
    description: 'Why cultural representation in dentistry matters for patients and aspiring students.',
    date: '2026-01-28',
    body: `As I dive deeper into the exciting and scientific world of dentistry and oral health, one thing that has stood out to me in all my research has been how much representation matters in a medical setting. Being able to see and meet people who share your background working in a profession can make a huge difference in how comfortable and confident you are when seeking care.

For many families, especially within immigrant and minority communities, going to the dentist can be intimidating. Language barriers, cultural differences, or past experiences may prevent people from getting regular dental care. When patients see dentists who understand their culture or speak their language, it can build trust and make dental visits feel less stressful.

This is one of the reasons I decided to add a Sikh Dentists Directory to my blog. I wanted to highlight Sikh professionals in dentistry and show how members of our community are contributing to healthcare in meaningful ways. Representation matters not only for patients, but also for students like me who are interested in pursuing dentistry. Seeing Sikh dentists who are successful and respected in their field makes my own goals feel more possible.

Dentistry is not just about treating teeth but about communication and understanding each patient as a person. Cultural awareness plays a big role in that. Dentists who understand their patients' backgrounds are often better able to educate, reassure, and support them.

Creating this directory has helped me realize that dentistry is as much about service and connection as it is about science. I hope this section of my blog can be a resource for families, students, and anyone interested in learning more about the diverse people who make up the dental profession.`,
  },
  {
    slug: 'week-5-preventive-dental-care',
    title: 'Week 5 – Why Preventive Dental Care Matters More Than Treatment',
    description: 'Why stopping dental problems before they start is the most important part of care.',
    date: '2026-02-04',
    body: `When people think about going to the dentist, they often imagine fillings, braces, or other treatments that fix a problem after it has already happened. What I'm learning through my interest in dentistry is that the most important part of dental care actually happens before any treatment is needed.

Preventive dental care focuses on stopping problems before they start. This includes regular dental checkups, cleanings, proper brushing and flossing, and learning healthy habits early. Preventive care helps reduce cavities, gum disease, and other oral health issues that can become painful and expensive if ignored.

One of the biggest benefits of preventive care is early detection. Dentists can catch small issues, like early signs of tooth decay or gum inflammation, before they turn into major problems. This not only protects oral health but also saves time, money, and discomfort for patients.

Preventive care is especially important for children and teenagers. Habits formed at a young age often continue into adulthood. Learning how to properly care for your teeth early on can make a lifelong difference in oral health and overall well-being.

Through this blog, I've started to see dentistry as a profession that emphasizes education and prevention just as much as treatment. Dentists play a key role in teaching patients how to care for their oral health, not just fixing problems when they arise. This focus on prevention is one of the reasons I'm excited to keep learning more about dentistry and sharing that knowledge with others.`,
  },
  {
    slug: 'week-6-what-im-learning-about-dentistry',
    title: "Week 6 – What I'm Learning About Dentistry as a Student",
    description: 'Science, skill, patient care, and what it takes to be an effective dentist.',
    date: '2026-02-11',
    body: `I have been studying dentistry for several years now, and I've been able to gain insight into what it takes to be an effective dentist. The most obvious thing that I've noticed is that there is a large theme of science, skill, and patient care in dentistry. A dentist will fix someone's teeth, but to be a competent dentist, you need to understand how the body operates as a whole and the reason why a patient may have an issue; you also need to give them a sense of confidence or well being.

I've been particularly fascinated by the variety of procedures dentists perform, from routine cleanings and fillings to more complex treatments like root canals or orthodontics. Each procedure requires careful planning and attention to detail. Even observing how dentists interact with patients has taught me the importance of communication and trust — a procedure can go smoothly only if the patient feels comfortable and informed.

I have also learned that the field of dentistry is always evolving; new advancements (digital x-rays, laser treatments, etc.) have allowed for quicker and more accurate means of providing patients with treatment. I am excited to see how science and technology will continue to evolve and change how we will be providing patients with care.

The other thing I'm learning is the amount of time it takes to become a dentist, which includes years of schooling, hands on practice, and a commitment. When I look at all of the lives dentists change — taking away pain and increasing a person's confidence — I know it's worth it!`,
  },
  {
    slug: 'week-7-can-ai-change-dentistry',
    title: 'Week 7 – Can AI Actually Change Dentistry?',
    description: 'How AI is already supporting dentists with diagnosis, rare cases, and patient care.',
    date: '2026-02-18',
    body: `This week, I've been thinking about something that really gets me interested: AI in dentistry.

At first, I figured AI in healthcare was something out of a sci-fi movie, kind of far-fetched. The more I learned, the clearer it became that it's already happening. AI tools can look at dental X-rays, spot early cavities, and even find patterns in bone loss or other oral diseases. That doesn't mean dentists are being replaced. It means they are getting support.

What I find really interesting is how AI might assist with rare dental cases. Rare conditions can be tougher to figure out since most dentists don't come across them very often. If AI systems are trained with a lot of data, they can sometimes spot patterns that people might overlook. That might help catch things sooner and make planning treatments easier.

This week also reminded me that technology by itself isn't enough. Dentistry is all about people. Patients aren't just images or data points; they come with fears, questions, and their own unique health stories. AI can point out issues, but it's up to the dentist to understand them, explain what's going on, and earn the patient's trust.

If I want to modernize dentistry someday, I know I'll need more than just clinical skills. I'll need to learn about research, data, and how technology can be used responsibly in patient care. Innovation isn't about swapping out people — it's about making systems work better. AI isn't the future of dentistry on its own. Dentists who get how AI works and apply it smartly could really make a difference. That's the kind of future I want to be involved in.`,
  },
  {
    slug: 'week-8-the-power-of-curiosity',
    title: 'Week 8 – The Power of Curiosity',
    description: 'How curiosity drives learning in science, dental research, and beyond.',
    date: '2026-02-25',
    body: `This week, I've been thinking a lot about curiosity and how it drives learning and keeps life interesting. In school, it's easy to focus only on assignments or grades, but I've noticed that when I follow my own questions — whether it's exploring new science concepts, dental research, or even tech innovations — I actually retain more and enjoy learning more.

Curiosity pushes me to connect different ideas. For example, learning about AI and how it could improve dental care made me think about ethical considerations, practical applications, and even ways to involve communities in health awareness. When I let myself explore beyond the classroom, I feel more engaged and motivated.

I've also realized that curiosity is about being brave enough to ask questions, even if they seem small or silly. Shadowing dentists and talking to professionals in health and tech fields has shown me that asking the right questions often leads to the most meaningful insights.

Going forward, I want to intentionally carve out time to explore the topics I'm curious about, even if they're not part of my homework. I think curiosity isn't just a tool for school — it's a mindset that will help me innovate and grow in whatever I choose to do, especially in dentistry.`,
  },
  {
    slug: 'week-9-going-through-the-research-process',
    title: 'Week 9 – Going Through the Research Process',
    description: 'Reflections on developing a research project and learning how research really works.',
    date: '2026-03-04',
    body: `This week in the program, I spent more time working on developing my research project and organizing my ideas. As I continue learning more about my topic, I'm realizing that research is not always a straight path. Sometimes you start with one idea, but as you learn more information, your thinking changes and you begin to see new directions your project could take.

One thing I worked on this week was looking deeper into the background of my topic and thinking about how it connects to real-world problems. Doing research takes patience because it can take time to fully understand the science behind something. I also noticed that asking questions and talking about ideas with others can really help. Hearing other perspectives can make you think about things you might not have considered before.

Another thing I focused on was how to clearly explain my ideas. Being able to communicate your research is really important because other people need to understand why your topic matters. Even if you have a strong idea, it only works if you can explain it clearly.

Overall, this week helped me continue developing my project and improving my research skills. Each week I'm learning more about how the research process works and how important it is to stay organized, patient, and open to new ideas.`,
  },
  {
    slug: 'week-10-the-future-of-ai-in-dentistry',
    title: 'Week 10 – The Future of AI in Dentistry',
    description: 'How AI may help dentists diagnose problems and plan personalized treatments.',
    date: '2026-03-11',
    body: `Technology is changing many areas of healthcare, and dentistry is no exception. One technology that could have a big impact on dentistry in the future is artificial intelligence (AI). AI is already being used in some medical fields, and it may soon help dentists diagnose and treat dental problems more accurately.

One way AI could help dentists is by analyzing dental images like X-rays. AI programs can quickly scan images and detect small signs of cavities, bone loss, or other issues that might be difficult to notice right away. This could help dentists catch problems earlier, which means patients could get treatment before the issue becomes more serious.

AI may also help improve treatment planning. By analyzing large amounts of patient data, AI systems could suggest the most effective treatments based on a patient's specific condition. This could make dental care more personalized and efficient.

However, even with advanced technology, dentists will still play a very important role. Dentistry requires human skills like communication, decision-making, and helping patients feel comfortable during procedures. AI will likely work as a tool to assist dentists rather than replace them.

Overall, AI has the potential to make dentistry more accurate, efficient, and personalized in the future. As technology continues to improve, it may help dentists provide even better care while still keeping the human connection that is such an important part of healthcare.`,
  },
  {
    slug: 'week-11-the-quiet-power-of-small-habits',
    title: 'Week 11 – The Quiet Power of Small Habits',
    description: 'Why small consistent habits matter more than big dramatic changes.',
    date: '2026-03-18',
    body: `We often think that big successes result from big changes, big decisions, or big opportunities. But in fact, most successful changes result from something much smaller: habits.

When you think about it, small habits are not important in the moment. Spending 20 extra minutes studying, drinking more water, organizing your space, or showing up to the gym is not going to change your life in any huge way. But over time, these small habits add up in ways you're not even aware of.

What's interesting about habits is they actually determine what kind of person you become. Spending time studying each day is not just something you do; it becomes who you are. Spending time on your health is not just something you do; it becomes who you are.

What makes habits successful is not being perfect — it's being consistent. Skipping one day is not the end of the world, but quitting is. It's showing up most days, knowing that the results will show up later.

In a world where everyone wants to see results quickly, small habits remind us that slow progress is actually progress. And sometimes, the smallest changes end up making the biggest difference.`,
  },
  {
    slug: 'week-12-failure-and-success',
    title: 'Week 12 – Why Failure Is Not the Opposite of Success',
    description: 'Reframing failure as part of learning and growth.',
    date: '2026-03-25',
    body: `Failure is generally understood to be a negative term. Something to be avoided. Something that holds us back. But what if failure is not actually the opposite of success but actually part of it?

The more we attempt new things, the more we are likely to fail at least somewhat. Whether it is a test, a project, or a new skill to be learned, failure is almost guaranteed. But in those moments of failure is where we actually learn.

Failure helps us to think. It helps us to see what we are doing wrong and to make changes. But without failure, we would never actually learn or challenge ourselves to be better. In fact, many successful people were not successful in spite of failure but because of it.

But another part of failure is actually being able to overcome it. This gives us a different type of self-confidence. It gives us the knowledge that we can overcome any obstacle.

Instead of viewing failure as something to be feared, we can actually begin to see it as a type of feedback. It is not an endpoint but merely part of the process. And sometimes, what we learn from our failure can be more valuable than what we were seeking to achieve by succeeding.

In the end, failure does not define us. What defines us is our response to our failure.`,
  },
  {
    slug: 'week-13-thinking-ahead-instead-of-catching-up',
    title: 'Week 13 – Learning to Think Ahead Instead of Catching Up',
    description: 'Why planning ahead beats last-minute cramming in school and beyond.',
    date: '2026-04-01',
    body: `This week taught me a lot about how often I am simply "trying to catch up" instead of thinking ahead. Most of my days this week have been spent simply completing my work right before it was due, studying for my test at the last minute, and trying to balance all of my work.

One thing I noticed was how different things would have been if I had been even somewhat prepared throughout the week. For instance, if I had done my homework a day or two early, things would have been much less stressful and more manageable. It wasn't about doing more work; it was about doing it at the right time.

I also realized that thinking ahead does not only help in school, but also in other bigger goals such as preparing for upcoming opportunities, developing skills, and consistency. Although these actions may seem small, they can greatly impact one in the future.

One thing I learned from this week is that getting ahead takes a bit of effort from the beginning, but it pays off in the long run, saving time and reducing stress levels. It is easy to slip into a procrastination pattern, but even a slight change can improve one's productivity and confidence levels.

In the future, I plan to improve myself by being proactive rather than reactive. This means getting ahead and staying organized to effectively handle tasks and build a better pattern for the future.`,
  },
  {
    slug: 'week-14-precision-behind-dentistry',
    title: 'Week 14 – Understanding the Precision Behind Dentistry',
    description: 'Why meticulousness and patience are essential skills for dentistry.',
    date: '2026-04-08',
    body: `Throughout this week, I took some time to think about the true essence of a career in dentistry. Although dentistry is usually considered to be a reliable and prestigious profession, I started realizing the importance of precision and meticulousness in order to become a successful dentist.

A career in dentistry is characterized by an intricate interplay between the theoretical knowledge of sciences and its practical application through very careful manipulation. Mistakes may have serious consequences, and therefore one has to be very attentive when working. This idea led me to consider my habits and realize whether I am capable of becoming a meticulous person at least when it comes to my studies.

For instance, such disciplines as math and sciences presuppose high levels of accuracy. This week, I tried to focus more on my studying and to make sure that I was doing everything accurately without hurrying up.

The other lesson that I learned is that the practice of dentistry is not only dependent on skills but also patience. The profession cannot be rushed into anything since it involves gaining adequate skills that will allow for effective performance in the future. The realization relates to myself as I continue to cultivate the much-needed discipline in order to be consistent.

In conclusion, the current week gave me insights into how dentistry should be viewed in reality. It is not only dependent on the realization of a dream but also on the development of an appropriate attitude and the required skills.`,
  },
  {
    slug: 'week-15-the-human-side-of-dentistry',
    title: 'Week 15 – The Human Side of Dentistry',
    description: 'Why communication and trust are as important as clinical skill.',
    date: '2026-04-15',
    body: `This week, I have paid special attention to one side of dentistry that is usually forgotten — the significance of communicating with the patient. Although dentistry is a science, it includes interacting with humans who may be scared of undergoing any procedures.

It has led me to change my perception of dentistry. A good dentist cannot solely rely on scientific knowledge; he should be able to create a friendly atmosphere in the clinic to help his patients become relaxed and comfortable.

Thus, I started thinking about myself and my life outside dentistry. School and everyday interaction with other people show how important communication is. Therefore, this week, I tried to be more attentive while talking to someone.

Furthermore, it became clear to me that trust needs time to be established. Similarly to dentistry, where patients need to be sure about professionals' responsibility, trust needs to be established consistently. This realization made me realize how important it is to follow up on all one's promises and be reliable in different settings.

Firstly, it became clear that success in dentistry does not necessarily depend on academic achievements. Success requires one to develop certain interpersonal skills. As such, improvement of my current communication skills will be useful in the future and in my everyday activities.

In the coming weeks, I will focus on my academic skills as well as communication skills. The gained insights concerning the human nature of dentistry helped me understand more about this profession.`,
  },
  {
    slug: 'week-16-why-sugar-is-your-teeths-worst-enemy',
    title: "Week 16 – Why Sugar Is Your Teeth's Worst Enemy (And What to Do About It)",
    description: 'The biology of Streptococcus mutans, acid attacks, and how to protect your enamel.',
    date: '2026-04-22',
    body: `Most people know that sugar is "bad for your teeth." But do you know why? The answer lies in some fascinating biology happening inside your mouth right now — and understanding it could change how you think about every sip of soda or bite of candy.

## The Bacteria Living in Your Mouth

Your mouth is home to hundreds of species of bacteria, most of them harmless. But one — *Streptococcus mutans* — is particularly troublesome. This bacterium thrives in dental plaque, the sticky film that forms on your teeth throughout the day.

When you eat or drink something sugary, S. mutans gets to work immediately. It ferments those sugars through a process called glycolysis, producing lactic acid as a byproduct.

## The Critical pH Threshold

Your mouth normally sits at a neutral pH of around 7.0. Within minutes of sugar exposure, S. mutans activity can drop that pH to below 5.0. The critical number to know is 5.5 — the point at which your tooth enamel begins to dissolve.

Enamel is the hardest substance in the human body, made up of tightly packed hydroxyapatite crystals. But it has one major weakness: acid. When pH drops below 5.5, hydrogen ions attack those crystals, breaking them apart in a process called demineralization.

## Why Frequency Matters More Than Amount

It's not how much sugar you eat that matters most — it's how often you expose your teeth to it. Every time you consume sugar, your mouth enters an acid attack phase that lasts 20–30 minutes. If you're sipping a sugary drink slowly over an hour, you're essentially keeping your mouth in a constant state of acid attack.

## What You Can Do

- Limit sugar frequency
- Brush twice daily with fluoride toothpaste
- Drink water
- Don't sip sugary drinks slowly
- Visit your dentist regularly

Tooth decay affects over 2.5 billion people worldwide, but the biology that drives it is well understood — and so are the habits that stop it.`,
  },
  {
    slug: 'week-15-the-science-behind-cavities',
    title: 'Week 15 – The Science Behind Cavities',
    description: 'How decay progresses through enamel, dentin, and pulp — layer by layer.',
    date: '2026-04-29',
    body: `When a dentist tells you that you have a cavity, it can feel like bad news out of nowhere. But cavities don't appear suddenly. They are the result of a slow, progressive biological process — one that scientists understand in remarkable detail.

## Layer 1: Enamel — The First Line of Defense

Your tooth's outermost layer, enamel, is composed of about 96% mineral — primarily hydroxyapatite. It is the hardest substance your body produces. Despite its toughness, enamel cannot repair itself once fully formed.

Early decay in enamel appears as a "white spot lesion" — a cloudy area where minerals have been lost but the structure is still mostly intact. At this stage, the damage is reversible with fluoride treatment and improved oral hygiene.

## Layer 2: Dentin — Where Things Get Painful

If acid attacks continue and enamel is breached, decay enters dentin — the softer layer beneath. This is where sensitivity begins. Decay progresses faster through dentin than enamel because it is less mineralized.

## Layer 3: The Pulp — The Living Core

At the center of every tooth is the pulp — nerves, blood vessels, and connective tissue. When decay reaches the pulp, the result is significant pain, infection risk, and often the need for root canal treatment.

## Can a Cavity Heal Itself?

In the very earliest stages — white spot lesions confined to the outer enamel — partial reversal is possible through remineralization. But once decay has progressed through enamel and into dentin, the tooth cannot heal on its own.

Understanding the anatomy of a cavity makes it clear why prevention is so much more powerful than treatment. Regular dental check-ups with X-rays can detect decay in its earliest, most treatable stages.`,
  },
  {
    slug: 'week-16-dentistry-is-more-than-teeth',
    title: 'Week 16 – Learning That Dentistry Is More Than Teeth',
    description: 'How oral health connects to confidence, overall health, and patient care.',
    date: '2026-05-06',
    body: `One thing I've started realizing more and more throughout this journey is that dentistry is about so much more than just teeth. Before I became interested in the dental field, I mostly thought dentists cleaned teeth, filled cavities, and maybe gave braces recommendations. But the deeper I look into the profession, the more I see how much confidence, comfort, and even health can be connected to someone's smile.

This week, I spent time researching how oral health affects the rest of the body, and honestly, it surprised me how connected everything is. Gum disease has been linked to heart disease, diabetes, and other health issues. It made me realize that dentists play a much bigger role in healthcare than many people think.

I also reflected on what draws me toward dentistry in the first place. I like that it combines science, creativity, and communication all together. Dentistry is one of those careers where you constantly work with your hands while also building relationships with patients.

Another thing I've been focusing on is improving my own habits and discipline. Since I'm balancing school, extracurriculars, and planning for the future, I've learned that consistency matters more than motivation.

As I continue this blog, I want to keep learning not only about the technical side of dentistry, but also about the human side of it. Every dentist has the opportunity to make someone feel more confident when they smile, and I think that's something really meaningful.

Overall, this week reminded me that pursuing dentistry is not just about choosing a career — it's about choosing a way to help people in a very personal and lasting way.`,
  },
  {
    slug: 'week-17-communication-in-dentistry',
    title: 'Week 17 – The Importance of Communication in Dentistry',
    description: 'Why trust, empathy, and clear communication are essential dental skills.',
    date: '2026-05-13',
    body: `This week, I started thinking more about something people don't always associate with dentistry: communication. When most people picture a dentist, they think about procedures, tools, or science, but being able to communicate well with patients is just as important.

A lot of people feel nervous about going to the dentist. Some people have anxiety from past experiences, while others are simply uncomfortable with dental procedures. Because of that, dentists have to know how to make patients feel calm, respected, and understood. I think that takes a special kind of patience and emotional intelligence.

One thing I admire about the dental field is that dentists often build long-term relationships with patients and families. They see people regularly over many years, which means trust becomes a huge part of the profession. Building that trust requires strong communication skills and genuine care.

I've also noticed how communication connects to leadership. Whether it's explaining a procedure, working with a team, or helping a patient understand oral hygiene, dentists constantly need to communicate clearly and confidently. That's something I want to continue improving in my own life through school, presentations, volunteering, and extracurricular activities.

As someone interested in dentistry, I'm learning that preparation isn't only about grades and science classes. It's also about becoming someone who can connect with people and make them feel comfortable.

This week reminded me that a great dentist is not only skilled technically, but also someone who knows how to listen, encourage, and support their patients. I think that human connection is one of the most important parts of healthcare.`,
  },
  {
    slug: 'week-18-staying-motivated-with-dentistry',
    title: 'Week 18 – Staying Motivated with Dentistry',
    description: 'Remembering long-term goals and exploring dental specialties as a student.',
    date: '2026-05-20',
    body: `This week made me think a lot about why I became interested in dentistry in the first place. Sometimes it's easy to get caught up in school, homework, extracurriculars, and stress, but I've been trying to remind myself of my long-term goals and what I want my future to look like.

One thing I've realized is that dentistry is more than just teeth. Dentists help people feel confident, healthy, and comfortable. A smile can affect someone's self-esteem, and being able to help patients improve their oral health is something I think would be really rewarding. I also like that dentistry combines science, problem-solving, creativity, and communication all together.

This week I spent some time researching different dental specialties and learning more about what dental students actually study in school. I found it interesting how many paths there are within dentistry, like orthodontics, pediatric dentistry, oral surgery, and cosmetic dentistry. Right now, I'm still open to exploring all of them because each specialty has something unique about it.

I've also been thinking about how important consistency is. Even small steps, like studying biology, improving time management, volunteering, or learning more about healthcare, can help me move closer to my goals. It can feel overwhelming sometimes thinking about how long the journey is, but I'm learning that progress happens little by little.

Overall, Week 18 reminded me that success doesn't happen overnight. Staying motivated, working hard, and continuing to learn are all part of the process. I'm excited to keep exploring the dental field and growing both academically and personally along the way.`,
  },
  {
    slug: 'week-19-the-science-behind-tooth-enamel',
    title: 'Week 19 – The Science Behind Tooth Enamel',
    description: 'Why enamel is the hardest substance in the body and how to protect it.',
    date: '2026-05-27',
    body: `This week, I decided to learn more about tooth enamel and why it is such an important part of oral health. Tooth enamel is the hard outer layer that covers each tooth. It is actually the hardest substance in the human body, even stronger than bone. Despite its strength, enamel can still be damaged by acids, sugary foods, and poor oral hygiene.

Enamel protects the sensitive inner layers of the tooth from daily wear and tear caused by chewing, biting, and temperature changes. Unlike other tissues in the body, enamel cannot regenerate once it is lost. This makes protecting it extremely important.

One of the biggest threats to enamel is tooth decay. When bacteria in the mouth feed on sugars, they produce acids that gradually wear away the enamel. Over time, this can lead to cavities. Fluoride helps strengthen enamel by making it more resistant to acid attacks, which is why many toothpastes and community water supplies contain fluoride.

Learning about enamel helped me understand why dentists emphasize brushing, flossing, and limiting sugary foods. Protecting enamel early can prevent many dental problems later in life. As someone interested in dentistry, I find it fascinating that such a thin layer can play such a critical role in maintaining oral health.`,
  },
  {
    slug: 'week-20-how-orthodontics-improve-dental-health',
    title: 'Week 20 – How Orthodontics Improve Dental Health',
    description: 'Health benefits of orthodontic treatment beyond appearance.',
    date: '2026-06-03',
    body: `This week, I explored the field of orthodontics, which focuses on diagnosing and correcting misaligned teeth and jaws. Many people think braces and clear aligners are only used to improve appearance, but orthodontic treatment also provides important health benefits.

When teeth are crowded or crooked, it can be more difficult to brush and floss effectively. This increases the risk of cavities and gum disease. By moving teeth into proper alignment, orthodontic treatment can make oral hygiene easier and more effective.

Orthodontics can also help improve bite function. Problems such as overbites, underbites, and crossbites can cause uneven tooth wear, jaw discomfort, and difficulty chewing. Correcting these issues can improve both comfort and long-term dental health.

Advances in technology have transformed orthodontics in recent years. Traditional metal braces are still widely used, but clear aligners have become a popular alternative for many patients. Digital imaging and treatment planning allow orthodontists to create more precise and personalized treatment plans.

Learning about orthodontics showed me how dentistry combines science, technology, and patient care to improve both oral health and confidence.`,
  },
  {
    slug: 'week-21-oral-and-overall-health-connection',
    title: 'Week 21 – The Connection Between Oral and Overall Health',
    description: 'How gum disease and oral health link to heart disease, diabetes, and more.',
    date: '2026-06-10',
    body: `This week, I researched the relationship between oral health and overall health. I was surprised to learn how closely the mouth is connected to the rest of the body.

Poor oral health, especially gum disease, has been linked to several systemic health conditions. Researchers have found associations between gum disease and conditions such as heart disease, diabetes, and respiratory illnesses. While scientists continue to study these relationships, it is clear that maintaining good oral health contributes to overall well-being.

The mouth can also provide early signs of certain health problems. Dentists may notice symptoms such as dry mouth, oral lesions, or changes in gum tissue that could indicate underlying medical conditions. This is one reason regular dental checkups are so important.

Good oral health habits include brushing twice a day, flossing daily, eating a balanced diet, and visiting the dentist regularly. These simple practices not only protect teeth and gums but may also support overall health.

This topic reinforced the idea that dentistry is about much more than teeth. Dentists play an important role in helping patients maintain their overall health, making the profession both challenging and rewarding.`,
  },
  {
    slug: 'week-22-small-daily-habits-for-your-smile',
    title: 'Week 22 – Small Daily Habits That Make a Big Difference for Your Smile',
    description: 'Six simple daily habits that protect oral health and prevent bigger problems.',
    date: '2026-06-17',
    body: `When it comes to maintaining a healthy smile, many people think of dental visits as the most important factor. While regular checkups are essential, the truth is that the choices we make every day have the greatest impact on our oral health.

Good dental habits don't require expensive products or complicated routines. Simple actions practiced consistently can help prevent cavities, gum disease, bad breath, and other oral health problems before they start.

## 1. Brush Properly Twice a Day

Brushing your teeth at least twice a day helps remove plaque, a sticky film of bacteria that forms on teeth. Use a soft-bristled toothbrush and fluoride toothpaste, and spend at least two minutes brushing all surfaces of your teeth. Remember that brushing too hard can damage your gums and enamel.

## 2. Don't Skip Flossing

Flossing removes food particles and plaque from between teeth and along the gumline — areas your toothbrush can't easily reach.

## 3. Stay Hydrated

Water helps wash away food particles, neutralize acids, and keep your mouth moist. A healthy flow of saliva is important because it helps protect teeth from decay.

## 4. Choose Tooth-Friendly Foods

Foods rich in calcium, phosphorus, and vitamins help strengthen teeth and gums. Try incorporating dairy products, leafy green vegetables, nuts and seeds, and fresh fruits and vegetables. Limiting sugary snacks and beverages can also reduce the risk of tooth decay.

## 5. Replace Your Toothbrush Regularly

Most dental professionals recommend replacing your toothbrush every three to four months, or sooner if the bristles become frayed.

## 6. Keep Up With Regular Dental Visits

Even with excellent home care, professional cleanings and examinations are important. Dentists can identify potential issues early, often before they become painful or costly to treat.

## Final Thoughts

A healthy smile is built on consistent daily habits. Small actions today can prevent bigger problems tomorrow. By committing to healthy habits each day, you're investing not only in your smile but also in your overall well-being.`,
  },
];

for (const post of posts) {
  const content = `---
title: "${post.title.replace(/"/g, '\\"')}"
description: "${post.description.replace(/"/g, '\\"')}"
date: ${post.date}
category: dentistry
tags: ["dental journal", "smiles science and service"]
---

${post.body}
`;
  writeFileSync(join(outDir, `${post.slug}.md`), content, 'utf8');
  console.log(`Wrote ${post.slug}.md`);
}

const remove = ['why-dentistry.md', 'oral-health-access.md'];
for (const f of remove) {
  const p = join(outDir, f);
  if (existsSync(p)) {
    unlinkSync(p);
    console.log(`Removed ${f}`);
  }
}

console.log(`Done: ${posts.length} dental journal posts imported.`);
