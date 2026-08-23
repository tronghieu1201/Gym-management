// Workout data structure
// ─── LỊCH CŨ (áp dụng cho dates trước 2026-08-24) ───────────────────────────
const workoutDataOld = {
    1: {
        name: 'Thứ 2',
        focus: 'Chest • Side Delts • Triceps',
        subtitle: 'Ngực chính, vai giữa, tay sau',
        exercises: [
            { 
                name: 'Dumbbell Floor Press', 
                sets: '3 hiệp × 8–12 lần', 
                notes: 'Tác động: chính vào ngực; phụ vào tay sau và vai trước',
                technique: 'Nằm ngửa trên sàn, co gối, giữ tạ ngang ngực và khuỷu chếch khỏi thân 30–45°. Hạ bắp tay chạm nhẹ sàn rồi đẩy tạ thẳng lên; không xoè khuỷu ngang 90°',
                image: 'https://cdn.athlemove.com/b2fe571e-2e10-4128-8daf-298e9fad659c.png?width=1200&format=webp&signature=1f1a44f205163396e69bb53c30cb1b4e100102ed97aeaf30fb6f1b4dbc460446'
            },
            { 
                name: 'Push-up', 
                sets: '2 hiệp × 8–20 lần', 
                notes: 'Tác động: chính vào ngực; phụ vào tay sau, vai trước và cơ bụng',
                technique: 'Đặt tay rộng hơn vai một chút, giữ đầu–lưng–mông–chân thành một đường thẳng. Hạ ngực gần chạm sàn với khuỷu chếch 30–45° rồi đẩy lên; không võng lưng',
                image: 'https://cdn.athlemove.com/466609e7-ccef-49df-906f-43483737c5a0.webp?width=1200&signature=1e2bf6f7f348c256e5de22849618718b550e10f466ee29e9646530e0c6bdb24e'
            },
            { 
                name: 'Band Chest Fly', 
                sets: '2 hiệp × 12–20 lần', 
                notes: 'Tác động: ngực, đặc biệt ở pha khép tay',
                technique: 'Móc dây chắc chắn phía sau ở ngang ngực, bước lên trước để tạo độ căng. Giữ khuỷu hơi cong, khép hai tay trước ngực rồi mở ra chậm và có kiểm soát',
                image: 'https://maniacmuscle.com/wp-content/uploads/2026/02/band-chest-fly-male_chest-fix__mp4_hd.original-2.jpg'
            },
            { 
                name: 'Dumbbell Lateral Raise', 
                sets: '3 hiệp × 12–20 lần', 
                notes: 'Tác động: vai giữa',
                technique: 'Cầm tạ hai bên, khuỷu hơi cong và nâng cánh tay sang ngang đến gần ngang vai. Dẫn chuyển động bằng khuỷu; không nhún người, quăng tạ hoặc nhún vai',
                image: 'https://cdn.athlemove.com/2bcf62c7-2686-4935-ae1c-0eaf3b44a88e.webp?width=1200&signature=9224edd1b14266031eb9b1331880d11b6f1a9761f437c6ff819220b7258cdd8a'
            },
            { 
                name: 'Dumbbell Overhead Triceps Extension', 
                sets: '2 hiệp × 10–15 lần', 
                notes: 'Tác động: tay sau, nhấn mạnh đầu dài',
                technique: 'Giữ một quả tạ bằng hai tay trên đầu, cố định bắp tay gần tai. Gập khuỷu hạ tạ ra sau đầu rồi duỗi tay lên; không xoè khuỷu quá rộng',
                image: 'https://cdn.athlemove.com/0f6b2f14-4dce-4201-8297-952d3c6e510b.webp?width=1200&signature=5466aed9a86efb295038011c40f341afaf3c7365ec4ca0c9397459529b54fc65'
            },
            { 
                name: 'Band Triceps Pushdown', 
                sets: '2 hiệp × 12–20 lần', 
                notes: 'Tác động: tay sau. Có thể thay Close-grip Push-up 2×8-15',
                technique: 'Móc dây ở vị trí cao và giữ khuỷu sát thân. Duỗi cẳng tay xuống đến khi tay gần thẳng rồi trở lại chậm; bắp tay không đưa ra trước–sau',
                image: 'https://cdn.athlemove.com/5f27f490-62d4-4e10-8911-096c48969a56.webp?width=1200&signature=b2c164c5372622d80642477c44633f3351485cdaf0e72d1ff983560957070c42'
            }
        ]
    },
    2: {
        name: 'Thứ 3',
        focus: 'Back • Rear Delts • Biceps',
        subtitle: 'Lưng, vai sau, tay trước',
        exercises: [
            { 
                name: 'Pull-up', 
                sets: '3 hiệp × 5–10 lần', 
                notes: 'Tác động: chính vào cơ xô và lưng trên; phụ vào tay trước',
                technique: 'Nắm xà tay sấp, rộng bằng hoặc hơn vai một chút. Từ tư thế treo có kiểm soát, kéo ngực hướng về xà đến khi cằm vượt xà rồi hạ chậm; không đạp hoặc vung chân. Nếu chưa đủ sức: dùng dây hỗ trợ hoặc Negative Pull-up (nhảy lên rồi hạ chậm 3-5 giây)',
                image: 'https://cdn.shopify.com/s/files/1/0705/5432/1194/files/mikolo-pull-ups-blog-2.png?v=1693468017'
            },
            { 
                name: 'One-arm Dumbbell Row', 
                sets: '3 hiệp × 8–15 lần mỗi bên', 
                notes: 'Tác động: cơ xô, lưng giữa và cơ quanh bả vai. Nghỉ 2-3 phút',
                technique: 'Chống một tay lên ghế chắc chắn hoặc đùi, giữ lưng trung lập. Kéo tạ về phía hông, ép bả vai về sau rồi hạ tạ hết tầm; không xoay vặn thân người',
                image: 'https://cdn.athlemove.com/e84eff2c-8caf-4818-8602-01ad02926e34.webp?width=750&signature=dc8a238f68fd206106cb3f32717103c9a60d8d463df879be52e1e12ffdf2789a'
            },
            { 
                name: 'Band Straight-arm Pulldown', 
                sets: '2 hiệp × 12–20 lần', 
                notes: 'Tác động: cơ xô',
                technique: 'Móc dây trên cao, đứng hơi nghiêng người về trước và giữ cánh tay gần thẳng. Kéo dây xuống sát đùi bằng cơ xô rồi đưa lên chậm; hạn chế gập khuỷu',
                image: 'https://cdn.athlemove.com/17a86b13-e9ba-45f0-9abe-fbd90daed157.webp?width=750&signature=301d7b68d7ee0e058aad599bdcb0c36481b2f66497561713fadbba102bb825a7'
            },
            { 
                name: 'Bent-over Dumbbell Rear-delt Fly', 
                sets: '2 hiệp × 12–20 lần', 
                notes: 'Tác động: vai sau và lưng trên',
                technique: 'Gập hông, giữ lưng thẳng và khuỷu hơi cong. Dang hai tay sang hai bên đến gần ngang thân rồi hạ chậm; không nhún vai hoặc quăng tạ',
                image: 'https://cdn.athlemove.com/e7b091af-8611-4fd4-b9a8-f04f1b41b925.png?width=750&format=webp&signature=f7b8c56662760440e316bd06d28bba373d59a67c1dd2a3e8e554a1fa37e91c6f'
            },
            { 
                name: 'Alternating Dumbbell Curl', 
                sets: '2 hiệp × 8–15 lần mỗi bên', 
                notes: 'Tác động: tay trước',
                technique: 'Đứng thẳng, lòng bàn tay hướng ra trước và giữ khuỷu sát thân. Cuốn từng quả tạ lên, siết tay trước rồi hạ hết tầm; không đung đưa người',
                image: 'https://cdn.athlemove.com/39cc852d-fb4c-48ba-8c32-c2d831e206ca.webp?width=750&signature=c2f5a3dd98fa7b3ee22f3c93e8a51c21e8ff7b024fc650faea087cb96a3519bc'
            },
            { 
                name: 'Hammer Curl', 
                sets: '2 hiệp × 10–15 lần mỗi bên', 
                notes: 'Tác động: cơ cánh tay, tay trước và cẳng tay',
                technique: 'Giữ hai lòng bàn tay hướng vào nhau như cầm búa. Cố định khuỷu, cuốn tạ lên rồi hạ chậm; không đưa vai về trước',
                image: 'https://cdn.athlemove.com/35545596-afdc-462a-bbe9-5a072c6faf3b.webp?width=750&signature=04d8acf63ee5733d7d0c7d225aed7f56164af713f00ce9b0e7157b610a725133'
            }
        ]
    },
    3: {
        name: 'Thứ 4',
        focus: 'Legs • Calves • Abs',
        subtitle: 'Chân, bắp chân, bụng',
        exercises: [
            { 
                name: 'Goblet Squat', 
                sets: '3 hiệp × 8–15 lần', 
                notes: 'Tác động: đùi trước và mông; phụ vào đùi sau và cơ bụng. Nghỉ 2-3 phút',
                technique: 'Ôm một quả tạ sát trước ngực, chân rộng khoảng bằng vai. Đẩy gối theo hướng mũi chân, ngồi xuống sâu trong khả năng rồi đạp đều cả bàn chân để đứng lên. Nếu tạ nhẹ: dùng nhịp hạ 3 giây – dừng 1 giây – nâng lên',
                image: 'https://cdn.athlemove.com/1fc0b159-960f-49e3-b314-df4529c53f38.png?width=640&format=webp&signature=48950b67ff54475216c8c8a340a47b67f9665e7068eb93425042c8030cc55f1a'
            },
            { 
                name: 'Dumbbell Romanian Deadlift', 
                sets: '3 hiệp × 8–15 lần', 
                notes: 'Tác động: gân kheo, mông và lưng dưới. Nghỉ 2-3 phút',
                technique: 'Cầm tạ trước đùi, gối hơi chùng và đẩy hông ra sau. Hạ tạ sát chân đến khi gân kheo căng rồi siết mông đứng lên; giữ lưng trung lập và không biến động tác thành squat',
                image: 'https://cdn.athlemove.com/1d8bb4e4-ac0c-485d-8c48-29b035763d45.webp?width=750&signature=fe2ec1cc8367c1c36d179a2d70b2ea89fcca4ce3704a42d7c0a098f44b6e8bc8'
            },
            { 
                name: 'Bulgarian Split Squat', 
                sets: '2 hiệp × 8–12 lần mỗi chân', 
                notes: 'Tác động: đùi trước và mông; cải thiện thăng bằng',
                technique: 'Đặt mu bàn chân sau lên ghế thấp, chắc chắn và chân trước bước đủ xa. Hạ hông thẳng xuống, giữ gối trước theo hướng mũi chân rồi đạp bằng chân trước để đứng lên',
                image: 'https://cdn.athlemove.com/24d09e98-7cb4-4977-a28d-d75a9bb59344.webp?width=750&signature=251451a4ff9a09e7471cc8fdb261247c4994ef646a9523d4caf78c77cf973ad9'
            },
            { 
                name: 'Band Lying Leg Curl', 
                sets: '2 hiệp × 12–20 lần', 
                notes: 'Tác động: gân kheo',
                technique: 'Móc dây ở vị trí thấp, chắc chắn và quấn vào cổ chân. Nằm sấp, giữ hông áp xuống sàn, co gối kéo gót chân về gần mông rồi duỗi chân trở lại chậm',
                image: 'https://gym-animations.com/wp-content/uploads/2026/01/Band-Lying-Leg-Curl-1024x683.png'
            },
            { 
                name: 'Single-leg Calf Raise', 
                sets: '3 hiệp × 12–20 lần mỗi chân', 
                notes: 'Tác động: bắp chân',
                technique: 'Đứng một chân, một tay vịn chắc chắn và tay còn lại cầm tạ. Hạ gót xuống có kiểm soát, nhón lên cao hết mức và dừng một nhịp ở trên',
                image: 'https://workoutguru.fit/wp-content/uploads/2023/10/dumbbell-standing-single-leg-calf-raise-video-exercise-guide-tips.jpg'
            },
            { 
                name: 'Reverse Crunch', 
                sets: '2 hiệp × 12–20 lần', 
                notes: 'Tác động: bụng, đặc biệt chức năng cuộn xương chậu',
                technique: 'Nằm ngửa, co gối và ép lưng dưới xuống sàn. Siết bụng cuộn xương chậu, đưa gối về phía ngực để mông nhấc nhẹ khỏi sàn; không vung chân lấy đà',
                image: 'https://cdn.athlemove.com/0156cecd-1d35-424a-9478-05023c653534.png?width=1200&format=webp&signature=242d7ad075d7b80aee6efcd819801be16df76c67982f0481d4fa82135b64a0dc'
            },
            { 
                name: 'Plank', 
                sets: '2 hiệp × 30–60 giây', 
                notes: 'Tác động: toàn bộ vùng core, mông và vai giữ ổn định',
                technique: 'Chống khuỷu ngay dưới vai, siết bụng và mông để cơ thể thành một đường thẳng. Không võng lưng hoặc nâng mông quá cao',
                image: 'https://cdn.athlemove.com/29f44cd6-9165-4c6c-9f1c-3df8561977f2.webp?width=1200&signature=f257815385dc37b5742d1c8308a289ba911f123ee1fda52cc48d68639c9e3ba0'
            }
        ]
    },
    4: {
        name: 'Thứ 5',
        focus: 'Nghỉ hoặc tập tự do',
        isRest: true,
        exercises: []
    },
    5: {
        name: 'Thứ 6',
        focus: 'Shoulders • Chest • Triceps',
        subtitle: 'Vai chính, ngực phụ, tay sau',
        exercises: [
            { 
                name: 'Standing Dumbbell Shoulder Press', 
                sets: '3 hiệp × 6–12 lần', 
                notes: 'Tác động: vai trước, vai giữa và tay sau. Nghỉ 2-3 phút',
                technique: 'Đứng vững, siết bụng và mông, giữ tạ ngang vai với khuỷu hơi hướng ra trước. Đẩy tạ lên trên đầu rồi hạ chậm; không ưỡn lưng để lấy đà. Nếu tạ quá nhẹ: thay Pike Push-up 4×6-15',
                image: 'https://cdn.athlemove.com/3d8573f4-7924-4283-97bc-81b9b8fd2af8.webp?width=1200&signature=cd7bd6f350e290496a80adc7ba5bfbbf8433a16fe0b17622bf7b89af55e04b84'
            },
            { 
                name: 'Alternating Dumbbell Front Raise',
                sets: '2 hiệp × 10–15 lần mỗi bên',
                notes: 'Tác động: vai trước',
                technique: 'Nâng từng quả tạ ra trước đến ngang vai rồi hạ chậm. Không nâng quá cao hoặc vung người lấy đà.',
                image: 'https://www.aleanlife.com/wp-content/uploads/2023/02/dumbbell-front-raise.jpg'
            },
            { 
                name: 'One-arm Band Lateral Raise',
                sets: '2 hiệp × 15–25 lần mỗi bên',
                notes: 'Tác động: vai giữa',
                technique: 'Giẫm chân lên dây, dùng một tay nâng sang ngang. Giữ dây luôn căng và hạ tay có kiểm soát.',
                image: 'https://tse1.mm.bing.net/th/id/OIP.OIdhuJrHvh0gGFgBkedtVgHaFX?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
            },
            { 
                name: 'Wide-grip Band Upright Row',
                sets: '2 hiệp × 12–20 lần',
                notes: 'Tác động: vai giữa và cầu vai',
                technique: 'Đứng lên dây, hai tay cầm rộng hơn vai rồi kéo khuỷu sang hai bên. Chỉ kéo đến khi khuỷu ngang vai; nếu thấy kẹt hoặc đau vai thì dừng bài này.',
                image: 'https://workoutguru.fit/wp-content/uploads/2023/10/band-upright-row-under-two-feet-video-exercise-guide-tips-1024x576.jpg'
            },
            { 
                name: 'Band Face Pull', 
                sets: '2 hiệp × 15–25 lần', 
                notes: 'Tác động: vai sau, cơ xoay ngoài vai và lưng trên',
                technique: 'Móc dây ngang mặt hoặc cao hơn một chút. Kéo dây về hai bên mặt, mở khuỷu và xoay bàn tay ra sau; siết vai sau, không nhún vai',
                image: 'https://cdn.athlemove.com/3b8949ce-df11-4ea8-91ba-08d238ea6cfc.png?width=1200&format=webp&signature=9d044bca8f23669309e2a4ff0518d63d73e634cfdd52833d643a2c18532c454f'
            },
            { 
                name: 'Dumbbell Squeeze Floor Press', 
                sets: '2 hiệp × 10–15 lần', 
                notes: 'Tác động: ngực và tay sau',
                technique: 'Nằm trên sàn, ép hai quả tạ sát vào nhau trước ngực. Duy trì lực ép vào nhau trong toàn bộ lúc đẩy lên và hạ xuống',
                image: 'https://cdn.athlemove.com/eebfac34-93d9-4932-8058-fb03ee6f253f.png?width=1200&format=webp&signature=0b6a28fb0c4ffd4e1b42952decaa12af85522f820facdfb73c330edb8b28ce74'
            },
            { 
                name: 'Dumbbell Overhead Triceps Extension', 
                sets: '2 hiệp × 10–15 lần', 
                notes: 'Tác động: tay sau, nhấn mạnh đầu dài',
                technique: 'Giữ một quả tạ bằng hai tay trên đầu, bắp tay gần tai. Gập khuỷu hạ tạ ra sau đầu rồi duỗi tay lên; giữ thân người và bắp tay ổn định',
                image: 'https://cdn.athlemove.com/0f6b2f14-4dce-4201-8297-952d3c6e510b.webp?width=1200&signature=5466aed9a86efb295038011c40f341afaf3c7365ec4ca0c9397459529b54fc65'
            }
        ]
    },
    6: {
        name: 'Thứ 7',
        focus: 'Back • Biceps • Forearms • Abs',
        subtitle: 'Lưng, tay trước, cẳng tay, bụng',
        exercises: [
            { 
                name: 'Chin-up', 
                sets: '3 hiệp × 5–10 lần', 
                notes: 'Tác động: cơ xô và tay trước; phụ vào lưng trên. Nghỉ 2-3 phút',
                technique: 'Nắm xà tay ngửa, rộng khoảng bằng vai. Kéo khuỷu xuống sát thân để đưa ngực lên và cằm vượt xà, sau đó hạ người chậm; không vung chân',
                image: 'https://cdn.athlemove.com/3adbb662-6037-41e3-a18a-6eb91ae26206.png?width=1200&format=webp&signature=1c65a6c0fb91e26f59f3f0f7a1c001cf1c7e1434457d7c4195d12feed1f09a26'
            },
            { 
                name: 'One-arm Dumbbell Row', 
                sets: '3 hiệp × 8–15 lần mỗi bên', 
                notes: 'Tác động: cơ xô, với khuỷu kéo sát thân',
                technique: 'Giữ lưng trung lập và kéo khuỷu sát sườn, đưa tạ về phía hông. Hạ tạ đến khi tay gần thẳng; không xoay người để lấy đà',
                image: 'https://cdn.athlemove.com/e84eff2c-8caf-4818-8602-01ad02926e34.webp?width=1200&signature=8015afc6c0656aa45f7794b5cf70bc0d533ef1785f0a06ae61208c1f7e9a06f6'
            },
            { 
                name: 'Dumbbell Pullover', 
                sets: '2 hiệp × 10–15 lần', 
                notes: 'Tác động: cơ xô; phụ vào ngực và tay sau giữ ổn định',
                technique: 'Nằm ngửa trên sàn, giữ một quả tạ bằng hai tay phía trên ngực. Giữ khuỷu hơi cong, hạ tạ ra sau đầu trong tầm kiểm soát rồi dùng cơ xô kéo tạ trở lại; không ưỡn lưng',
                image: 'https://cdn.athlemove.com/fa958568-77ad-46f9-8295-216d71284507.webp?width=1200&signature=b2b86ca52be9370afeda8d3b1877197a53ad5eb984d9df0083178a68985d4f96'
            },
            { 
                name: 'Concentration Curl', 
                sets: '2 hiệp × 8–15 lần mỗi bên', 
                notes: 'Tác động: tay trước',
                technique: 'Ngồi, tì mặt sau khuỷu vào mặt trong đùi. Cuốn tạ lên, siết tay trước rồi hạ gần thẳng tay; không di chuyển khuỷu',
                image: 'https://cdn.athlemove.com/44b7bd61-5f68-4796-bfe9-898f2a5f9b7f.webp?width=1200&signature=db59d9a6edf1dd87c3895345a7efb3f4a750beb43638f559b03de8ff5624230e'
            },
            { 
                name: 'Band Curl', 
                sets: '2 hiệp × 12–20 lần', 
                notes: 'Tác động: tay trước',
                technique: 'Đứng lên giữa dây và cầm hai đầu dây. Giữ khuỷu sát thân, cuốn tay lên rồi hạ chậm, luôn duy trì độ căng của dây',
                image: 'https://cdn.athlemove.com/0f3d8739-454b-4b02-b869-1d4aa23eb976.webp?width=1200&signature=c5c4ce91c142586a3f654f8ee2342b6a02d2b11bd2e1b8c6c5da83aa654ad910'
            },
            { 
                name: 'Dumbbell Reverse Curl', 
                sets: '2 hiệp × 12–15 lần mỗi bên', 
                notes: 'Tác động: cẳng tay và cơ cánh tay',
                technique: 'Cầm tạ với lòng bàn tay hướng xuống, giữ khuỷu sát thân và cuốn tạ lên. Giữ cổ tay thẳng, không bẻ cổ tay hoặc đung đưa người',
                image: 'https://workoutguru.fit/wp-content/uploads/2023/10/dumbbell-revers-grip-biceps-curl-video-exercise-guide-tips.jpg'
            },
            { 
                name: 'Farmer Hold', 
                sets: '2 hiệp × 30–60 giây', 
                notes: 'Tác động: lực nắm, cẳng tay, cầu vai và core',
                technique: 'Cầm tạ nặng hai bên, đứng cao người, siết bụng và nắm tạ thật chắc. Không nghiêng người hoặc để vai đổ ra trước',
                image: 'https://tse4.mm.bing.net/th/id/OIP.AhBCAr5dIKA3x5tLPAybowHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3'
            },
            { 
                name: 'Hanging Knee Raise', 
                sets: '2 hiệp × 8–15 lần', 
                notes: 'Tác động: bụng và cơ gập hông',
                technique: 'Treo người trên xà, siết bụng kéo gối về phía ngực và cuộn nhẹ xương chậu lên. Hạ chân có kiểm soát; không đung đưa',
                image: 'https://cdn.athlemove.com/0f59067b-99c9-4bb9-bf0f-d124f3a41512.webp?width=1080&signature=cd01cf393a552a9ec3ce2ecadf5afd3972b8243268c90ee12d9782994db7408b'
            }
        ]
    },
    0: {
        name: 'Chủ nhật',
        focus: 'Legs • Calves • Abs',
        subtitle: 'Chân, bắp chân, bụng',
        exercises: [
            {
                name: 'Goblet Squat',
                sets: '2 hiệp × 8–15 lần',
                notes: 'Tác động: đùi trước và mông; phụ vào cơ bụng',
                technique: 'Ôm một quả tạ sát trước ngực, đẩy gối theo hướng mũi chân và đứng lên bằng toàn bàn chân. Giữ lưng trung lập, không cần tập đến kiệt sức.',
                image: 'https://cdn.athlemove.com/1fc0b159-960f-49e3-b314-df4529c53f38.png?width=640&format=webp&signature=48950b67ff54475216c8c8a340a47b67f9665e7068eb93425042c8030cc55f1a'
            },
            {
                name: 'Dumbbell Romanian Deadlift',
                sets: '3 hiệp × 8–15 lần',
                notes: 'Tác động: gân kheo và mông',
                technique: 'Đẩy hông ra sau, giữ tạ sát chân và lưng trung lập. Dừng khi gân kheo căng; không cố hạ sâu bằng cách cong lưng.',
                image: 'https://cdn.athlemove.com/1d8bb4e4-ac0c-485d-8c48-29b035763d45.webp?width=750&signature=fe2ec1cc8367c1c36d179a2d70b2ea89fcca4ce3704a42d7c0a098f44b6e8bc8'
            },
            {
                name: 'Bulgarian Split Squat',
                sets: '2 hiệp × 8–12 lần mỗi chân',
                notes: 'Tác động: đùi trước, mông và thăng bằng',
                technique: 'Hạ hông thẳng xuống, gối trước đi theo hướng mũi chân. Giảm biên độ hoặc dừng nếu đầu gối đau nhói.',
                image: 'https://cdn.athlemove.com/24d09e98-7cb4-4977-a28d-d75a9bb59344.webp?width=750&signature=251451a4ff9a09e7471cc8fdb261247c4994ef646a9523d4caf78c77cf973ad9'
            },
            {
                name: 'Band Lying Leg Curl',
                sets: '2 hiệp × 12–20 lần',
                notes: 'Tác động: gân kheo',
                technique: 'Nằm sấp, giữ hông áp sàn, co gối kéo gót chân về gần mông rồi hạ có kiểm soát.',
                image: 'https://gym-animations.com/wp-content/uploads/2026/01/Band-Lying-Leg-Curl-1024x683.png'
            },
            {
                name: 'Single-leg Calf Raise',
                sets: '3 hiệp × 12–20 lần mỗi chân',
                notes: 'Tác động: bắp chân',
                technique: 'Hạ gót có kiểm soát, nhón lên cao hết biên độ và dừng ngắn ở đỉnh. Có thể vịn tay để giữ thăng bằng.',
                image: 'https://workoutguru.fit/wp-content/uploads/2023/10/dumbbell-standing-single-leg-calf-raise-video-exercise-guide-tips.jpg'
            },
            {
                name: 'Reverse Crunch',
                sets: '2 hiệp × 12–20 lần',
                notes: 'Tác động: cơ bụng',
                technique: 'Ép lưng dưới xuống sàn, cuộn xương chậu nhẹ và hạ chân chậm. Không vung chân để lấy đà.',
                image: 'https://cdn.athlemove.com/0156cecd-1d35-424a-9478-05023c653534.png?width=1200&format=webp&signature=242d7ad075d7b80aee6efcd819801be16df76c67982f0481d4fa82135b64a0dc'
            },
            {
                name: 'Plank',
                sets: '2 hiệp × 30–60 giây',
                notes: 'Tác động: core, mông và vai ổn định',
                technique: 'Chống khuỷu ngay dưới vai, siết bụng và mông. Dừng khi không còn giữ được lưng trung lập.',
                image: 'https://cdn.athlemove.com/29f44cd6-9165-4c6c-9f1c-3df8561977f2.webp?width=1200&signature=f257815385dc37b5742d1c8308a289ba911f123ee1fda52cc48d68639c9e3ba0'
            }
        ]
    }
};

// ─── LỊCH MỚI (áp dụng từ 2026-08-24 trở đi) ───────────────────────────────
const workoutData = {
    1: {
        name: 'Thứ 2',
        focus: 'Shoulders • Chest • Triceps',
        subtitle: 'Vai chính, ngực, tay sau',
        exercises: [
            {
                name: 'Shoulder Press',
                sets: '3 hiệp × 6–10 lần',
                notes: 'Tác động: Vai trước và vai giữa; tay sau hỗ trợ. Nghỉ: 2–3 phút',
                technique: 'Ngồi trên ghế có tựa hoặc đứng thẳng, cầm tạ ở ngang vai. Siết nhẹ bụng và mông, giữ lưng trung tính. Đẩy tạ lên trên đến khi cánh tay gần duỗi thẳng, sau đó hạ tạ chậm về ngang vai. Không ưỡn lưng hoặc dùng chân lấy đà.',
                image: 'https://images.squarespace-cdn.com/content/v1/5ffcea9416aee143500ea103/1637823947290-H5CTB9ZIB4T1ZID0X6G1/Seated%2BDumbbell%2BShoulder%2BPress.jpeg'
            },
            {
                name: 'Lateral Raise',
                sets: '4 hiệp × 12–20 lần',
                notes: 'Tác động: Vai giữa, nhóm cơ chính tạo cảm giác vai rộng. Nghỉ: 60–90 giây',
                technique: 'Đứng thẳng, cầm tạ hai bên người, khuỷu tay hơi cong. Nâng hai tay sang hai bên đến khoảng ngang vai, giữ ngắn ở phía trên rồi hạ xuống chậm. Không đung đưa người hoặc dùng quán tính để nâng tạ.',
                image: 'https://qitano.com/wp-content/uploads/2021/11/%E3%82%B5%E3%82%A4%E3%83%89%E3%83%AC%E3%82%A4%E3%82%BA.jpg'
            },
            {
                name: 'Rear Delt Fly',
                sets: '3 hiệp × 12–20 lần',
                notes: 'Tác động: Vai sau và phần lưng trên. Nghỉ: 60–90 giây',
                technique: 'Gập người tại hông, giữ lưng trung tính và để tạ phía dưới thân. Mở hai tay sang hai bên bằng cách đưa khuỷu tay ra ngoài, siết vai sau ở cuối chuyển động rồi hạ tạ chậm. Không vung tạ hoặc biến động tác thành chèo tạ.',
                image: 'https://cdn.jackedgorilla.com/wp-content/uploads/2021/10/Best-Rear-Delt-Exercises-Seated-Rear-Delt-Dumbbell-Flyes.jpg'
            },
            {
                name: 'DB Bench Press',
                sets: '3 hiệp × 6–10 lần',
                notes: 'Tác động: Ngực, đặc biệt phần ngực giữa; vai trước và tay sau hỗ trợ. Nghỉ: 2–3 phút',
                technique: 'Nằm trên ghế, hai chân đặt chắc xuống sàn, giữ bả vai ổn định. Hạ tạ xuống hai bên ngực với khuỷu tay hơi chếch ra ngoài, sau đó đẩy tạ lên có kiểm soát. Không nảy tạ và không để vai bị kéo mạnh về phía trước ở đáy.',
                image: 'https://wellness52.com/wp-content/uploads/2022/09/Dumbbell-Bench-Press.jpg'
            },
            {
                name: 'Incline DB Press',
                sets: '2 hiệp × 8–12 lần',
                notes: 'Tác động: Ngực trên; vai trước và tay sau hỗ trợ. Nghỉ: 90–120 giây',
                technique: 'Điều chỉnh ghế nghiêng khoảng 30–45°. Giữ bả vai ổn định, hạ tạ xuống vùng ngực trên rồi đẩy lên theo hướng tự nhiên. Không dựng ghế quá cao khiến bài biến thành Shoulder Press.',
                image: 'https://cdn.zyloai.app/exercise/images/dumbbell-incline-bench-press-2.webp'
            },
            {
                name: 'Overhead Triceps Extension',
                sets: '3 hiệp × 10–15 lần',
                notes: 'Tác động: Tay sau, đặc biệt đầu dài cơ tam đầu. Nghỉ: 60–90 giây',
                technique: 'Giữ một quả tạ bằng hai tay phía trên đầu. Gập khuỷu tay để hạ tạ xuống phía sau đầu, giữ cánh tay trên tương đối cố định rồi duỗi khuỷu tay đưa tạ trở lại. Không xoè khuỷu tay quá rộng hoặc ưỡn lưng.',
                image: 'https://fitliferegime.com/wp-content/uploads/2021/07/One-Arm-Overhead-Dumbbell-Triceps-Extension.jpg'
            }
        ]
    },
    2: {
        name: 'Thứ 3',
        focus: 'Back • Biceps • Abs',
        subtitle: 'Lưng, tay trước, core',
        exercises: [
            {
                name: 'Pull-up',
                sets: '4 hiệp × 5–10 lần',
                notes: 'Tác động: Xô, lưng trên, tay trước và cẳng tay. Nghỉ: 2–3 phút',
                technique: 'Nắm xà chắc, treo người có kiểm soát. Kéo khuỷu tay xuống và về phía thân người để đưa cơ thể lên gần xà. Sau đó hạ xuống chậm về vị trí ban đầu. Không đung đưa hoặc dùng chân tạo đà.',
                image: ''
            },
            {
                name: 'One-arm DB Row',
                sets: '3 hiệp × 8–12 lần mỗi bên',
                notes: 'Tác động: Xô, lưng giữa và lưng trên; tay trước hỗ trợ. Nghỉ: 90–120 giây',
                technique: 'Chống một tay lên ghế, chân đứng vững và giữ lưng trung tính. Kéo tạ về hướng hông bằng khuỷu tay, siết lưng ở cuối chuyển động rồi hạ tạ chậm. Không xoay thân người theo tạ.',
                image: ''
            },
            {
                name: 'Band Pulldown / Straight-arm Pulldown',
                sets: '3 hiệp × 12–20 lần',
                notes: 'Tác động: Cơ xô và các cơ kéo của thân trên. Nghỉ: 60–90 giây',
                technique: 'Band Pulldown: Cố định dây ở vị trí cao, kéo khuỷu tay xuống về phía thân người và đưa dây xuống vùng ngực. Straight-arm Pulldown: Giữ khuỷu tay gần như cố định, kéo hai tay từ phía trước xuống về phía đùi bằng chuyển động của vai. Hai biến thể có thể thay thế cho nhau.',
                image: ''
            },
            {
                name: 'DB Curl',
                sets: '3 hiệp × 8–12 lần',
                notes: 'Tác động: Biceps, cơ tay trước. Nghỉ: 60–90 giây',
                technique: 'Giữ khuỷu tay gần thân người. Cuốn tạ lên bằng cách gập khuỷu tay, siết biceps ở phía trên rồi hạ tạ chậm. Giữ thân người ổn định, không ngả người lấy đà.',
                image: ''
            },
            {
                name: 'Hammer Curl',
                sets: '3 hiệp × 10–15 lần',
                notes: 'Tác động: Brachialis, biceps và cẳng tay. Nghỉ: 60–90 giây',
                technique: 'Cầm tạ với lòng bàn tay hướng vào nhau. Giữ cổ tay trung tính, cuốn tạ lên bằng khuỷu tay rồi hạ xuống chậm. Không xoay cổ tay hoặc đung đưa người.',
                image: ''
            },
            {
                name: 'Hanging Knee Raise / Plank',
                sets: '3 hiệp',
                notes: 'Tác động: Cơ bụng và khả năng kiểm soát thân người. Nghỉ: 60–90 giây',
                technique: 'Hanging Knee Raise: Treo người chắc trên xà, giữ thân ổn định và kéo đầu gối lên phía thân người. Hạ xuống chậm, tránh đung đưa. Plank: Giữ cơ thể thành một đường thẳng từ đầu đến chân, siết bụng và mông, không võng lưng.',
                image: ''
            }
        ]
    },
    3: {
        name: 'Thứ 4',
        focus: 'Nghỉ',
        subtitle: 'Hôm nay bạn được phép nghỉ, đừng cảm thấy tội lỗi!',
        isRest: true,
        exercises: []
    },
    4: {
        name: 'Thứ 5',
        focus: 'Shoulders • Chest',
        subtitle: 'Vai cao, ngực cao',
        exercises: [
            {
                name: 'Lateral Raise',
                sets: '4 hiệp × 12–20 lần',
                notes: 'Tác động: Vai giữa. Nghỉ: 60–90 giây',
                technique: 'Đứng thẳng, khuỷu tay hơi cong. Nâng tạ sang hai bên đến khoảng ngang vai, giữ ngắn ở trên rồi hạ xuống chậm. Không nhún người hoặc dùng đà.',
                image: ''
            },
            {
                name: 'Band Lateral Raise',
                sets: '3 hiệp × 15–25 lần',
                notes: 'Tác động: Vai giữa. Nghỉ: 45–75 giây',
                technique: 'Đứng lên dây hoặc cố định dây phía dưới. Nâng cánh tay sang ngang với lực căng liên tục của dây, sau đó hạ xuống từ từ. Không để dây kéo tay rơi tự do.',
                image: ''
            },
            {
                name: 'Rear Delt Fly',
                sets: '3 hiệp × 15–20 lần',
                notes: 'Tác động: Vai sau và lưng trên. Nghỉ: 60–90 giây',
                technique: 'Gập người tại hông, giữ lưng trung tính. Mở hai tay sang hai bên bằng cách đưa khuỷu tay ra ngoài, tập trung siết vai sau rồi hạ tạ chậm.',
                image: ''
            },
            {
                name: 'Face Pull',
                sets: '2 hiệp × 15–20 lần',
                notes: 'Tác động: Vai sau, lưng trên và các cơ quanh bả vai. Nghỉ: 45–75 giây',
                technique: 'Cố định dây ở khoảng ngang mặt hoặc ngực trên. Kéo dây về phía mặt, đưa khuỷu tay ra ngoài và giữ vai ổn định. Trả dây về vị trí đầu có kiểm soát.',
                image: ''
            },
            {
                name: 'Incline DB Press',
                sets: '3 hiệp × 8–12 lần',
                notes: 'Tác động: Ngực trên; vai trước và tay sau hỗ trợ. Nghỉ: 90–120 giây',
                technique: 'Đặt ghế ở góc khoảng 30–45°. Hạ tạ có kiểm soát xuống vùng ngực trên, sau đó đẩy lên. Giữ bả vai ổn định và chân chắc trên sàn.',
                image: ''
            },
            {
                name: 'Band Chest Press / Push-up',
                sets: '2 hiệp × 12–20 lần',
                notes: 'Tác động: Ngực; vai trước và tay sau hỗ trợ. Nghỉ: 60–90 giây',
                technique: 'Band Chest Press: Cố định dây phía sau người ở ngang ngực, đẩy hai tay về phía trước rồi đưa về chậm. Push-up: Giữ thân người thẳng, siết bụng, hạ ngực xuống có kiểm soát rồi đẩy cơ thể lên. Hai bài là lựa chọn thay thế cho nhau.',
                image: ''
            }
        ]
    },
    5: {
        name: 'Thứ 6',
        focus: 'Nghỉ',
        subtitle: 'Hôm nay bạn được phép nghỉ, đừng cảm thấy tội lỗi!',
        isRest: true,
        exercises: []
    },
    6: {
        name: 'Thứ 7',
        focus: 'Upper • Biceps • Forearms • Abs',
        subtitle: 'Upper body, tay, cẳng tay, core',
        exercises: [
            {
                name: 'DB Bench Press',
                sets: '3 hiệp × 8–12 lần',
                notes: 'Tác động: Ngực; vai trước và tay sau hỗ trợ. Nghỉ: 90–120 giây',
                technique: 'Nằm trên ghế, giữ bả vai ổn định và hai chân chắc trên sàn. Hạ tạ xuống hai bên ngực rồi đẩy lên có kiểm soát. Không nảy tạ hoặc mất kiểm soát ở đáy.',
                image: ''
            },
            {
                name: 'Pull-up / Chin-up',
                sets: '3 hiệp × 6–10 lần',
                notes: 'Tác động: Xô, lưng trên, biceps và cẳng tay. Nghỉ: 2–3 phút',
                technique: 'Pull-up: Lòng bàn tay hướng ra ngoài. Chin-up: Lòng bàn tay hướng vào người. Kéo khuỷu tay xuống và về phía thân người, đưa cơ thể lên có kiểm soát rồi hạ xuống chậm. Có thể luân phiên hai biến thể.',
                image: ''
            },
            {
                name: 'One-arm DB Row',
                sets: '2 hiệp × 10–12 lần mỗi bên',
                notes: 'Tác động: Xô, lưng giữa và lưng trên. Nghỉ: 90–120 giây',
                technique: 'Chống một tay lên ghế, giữ lưng trung tính. Kéo tạ về hướng hông, siết lưng rồi hạ xuống từ từ. Không xoay thân người để hỗ trợ.',
                image: ''
            },
            {
                name: 'Hammer Curl',
                sets: '2 hiệp × 10–15 lần',
                notes: 'Tác động: Brachialis, biceps và cẳng tay. Nghỉ: 60–90 giây',
                technique: 'Giữ lòng bàn tay hướng vào nhau trong suốt chuyển động. Cuốn tạ lên bằng cách gập khuỷu tay, sau đó hạ xuống chậm. Giữ khuỷu tay gần thân người.',
                image: ''
            },
            {
                name: 'Band Triceps Pushdown',
                sets: '3 hiệp × 12–20 lần',
                notes: 'Tác động: Tay sau. Nghỉ: 60–90 giây',
                technique: 'Cố định dây ở vị trí cao. Giữ khuỷu tay gần thân người, đẩy dây xuống bằng cách duỗi khuỷu tay. Siết tay sau ở cuối chuyển động rồi đưa dây trở lại có kiểm soát.',
                image: ''
            },
            {
                name: 'Farmer Hold',
                sets: '3 hiệp × 30–60 giây',
                notes: 'Tác động: Cẳng tay, grip, cơ cầu vai và khả năng ổn định toàn thân. Nghỉ: 60–90 giây',
                technique: 'Cầm hai quả tạ nặng vừa phải ở hai bên thân. Đứng thẳng, siết bụng, giữ vai ổn định và duy trì tư thế trong thời gian quy định. Không nghiêng người hoặc nhún vai liên tục.',
                image: ''
            }
        ]
    },
    0: {
        name: 'Chủ nhật',
        focus: 'Nghỉ',
        subtitle: 'Hôm nay bạn được phép nghỉ, đừng cảm thấy tội lỗi!',
        isRest: true,
        exercises: []
    }
};

// Chỉ tính dữ liệu từ ngày bắt đầu lộ trình tập luyện.
const PROGRAM_START_DATE = '2025-12-31';
const NEW_SCHEDULE_START_DATE = '2026-08-24'; // Lịch mới áp dụng từ tuần này
const SMOKE_FREE_START_DATE = new Date(2026, 6, 14);
const SUNDAY_TRAINING_MIGRATION_KEY = 'gymTrackerSundayTrainingV1';
const APP_LOCKED_SESSION_KEY = 'gymTrackerLockedSession';
const APP_LOCK_RETURN_KEY = 'gymTrackerLockReturn';
const WORKER_API_URL = 'https://gymmanagement.trghy.workers.dev';
const CLOUD_ACCESS_TOKEN_KEY = 'gymTrackerCloudAccessToken';

// Helper: trả về đúng workout theo ngày
// - Từ 23/8/2026 trở về trước: Lấy từ workoutDataOld (lịch cũ)
// - Từ 24/8/2026 trở đi: Lấy từ workoutData (lịch mới)
function getWorkoutForDate(date) {
    const dateStr = (typeof date === 'string') ? date : formatDate(date);
    const dayOfWeek = new Date(dateStr + 'T12:00:00').getDay();
    
    // So sánh string YYYY-MM-DD: '2026-08-23' < '2026-08-24' < '2026-08-25'
    if (dateStr >= NEW_SCHEDULE_START_DATE) {
        // Từ 24/8/2026 trở đi: Dùng lịch mới
        return workoutData[dayOfWeek];
    }
    // Trước 24/8/2026: Dùng lịch cũ
    return workoutDataOld[dayOfWeek];
}

// State management
let currentWeekOffset = 0;
let activeDayIndex = (new Date().getDay() + 6) % 7;
let workoutProgress = loadProgress();
let stopwatchInterval = null;
let stopwatchTime = 0;
let stopwatchRunning = false;
let stopwatchHistory = loadStopwatchHistory();

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    if (sessionStorage.getItem(APP_LOCKED_SESSION_KEY) === '1' || !hasActiveCloudAccessToken()) {
        redirectToLockScreen();
        return;
    }
    applySavedTheme();
    migrateSundayRestProgress();
    renderWorkouts();
    updateStats();
    setupEventListeners();
    setupNavigation();
    restorePageFromHash();
    setupMobileMenu();
    setupThemeSettings();
    setupBrandReload();
    setupConfirmDialog();
    setupAppLock();
    startLiveClock();
    updateStopwatchHistory();
    void bootstrapCloudSync();
    
    // Check for updates
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            // Relative path keeps the PWA working under a GitHub Pages project path.
            navigator.serviceWorker.register('./sw.js').catch(() => {
                // Service worker not available, continue without it
            });
        });
    }
});

function activatePage(pageName, updateUrl = false) {
    const navItems = document.querySelectorAll('.nav-item');
    const navTabs = document.querySelectorAll('.nav-tab');
    const pages = document.querySelectorAll('.content-page');
    const currentNav = document.querySelector(`.nav-item[data-page="${pageName}"]`);
    const currentTab = document.querySelector(`.nav-tab[data-page="${pageName}"]`);
    const targetPage = document.getElementById(`${pageName}-page`);
    if (!currentNav || !targetPage) return;

    navItems.forEach(nav => nav.classList.remove('active'));
    navTabs.forEach(tab => tab.classList.remove('active'));
    pages.forEach(page => page.classList.remove('active'));
    currentNav.classList.add('active');
    if (currentTab) currentTab.classList.add('active');
    targetPage.classList.add('active');

    const pageTitle = document.querySelector('.page-title');
    const pageMeta = {
        workout: { eyebrow: 'Kế hoạch tuần', title: 'Lịch tập luyện', subtitle: '' },
        stats: { eyebrow: 'Nhìn lại hành trình', title: 'Tiến độ tập luyện', subtitle: '' },
        exercises: { eyebrow: 'Theo dõi thời lượng', title: 'Bấm giờ tập luyện', subtitle: '' },
        settings: { eyebrow: 'Không gian của bạn', title: 'Cài đặt & dữ liệu', subtitle: '' }
    };
    const meta = pageMeta[pageName];
    pageTitle.textContent = meta.title;
    document.querySelector('.page-subtitle').textContent = meta.subtitle;
    document.getElementById('headerEyebrow').textContent = meta.eyebrow;

    if (pageName === 'stats') updateStatisticsPage();
    if (updateUrl) history.replaceState(null, '', `#${pageName}`);
    closeMobileMenu();
}

function restorePageFromHash() {
    const pageName = window.location.hash.slice(1);
    if (pageName) activatePage(pageName);
}

function setupNavigation() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            activatePage(item.dataset.page, true);
        });
    });
    
    // ─── Bottom navigation (mobile) ─── 
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', event => {
            event.preventDefault();
            const page = tab.dataset.page;
            activatePage(page, true);
            
            // Update active state
            document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            // Close sidebar if open (on tablet)
            const sidebar = document.getElementById('sidebar');
            if (sidebar && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
            }
        });
    });
    
    window.addEventListener('hashchange', restorePageFromHash);
}

function updateStatisticsPage() {
    // Calculate all statistics
    const stats = calculateAllStats();
    
    // Update main stats cards
    document.getElementById('statsStreak').textContent = stats.currentStreak;
    document.getElementById('statsTotalWorkouts').textContent = stats.totalWorkouts;
    document.getElementById('statsThisWeek').textContent = stats.thisWeekWorkouts;
    document.getElementById('statsTotalExercises').textContent = stats.totalExercises;
    document.getElementById('statsMissedDays').textContent = stats.missedDays;
    
    // Update week progress
    const weekPercent = Math.round((stats.thisWeekWorkouts / 7) * 100);
    document.getElementById('statsWeekProgress').style.width = weekPercent + '%';
    document.getElementById('statsWeekPercent').textContent = weekPercent + '%';
    
    // Update weekly chart (Monday to Sunday)
    ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'].forEach((label, index) => {
        const labelEl = document.querySelectorAll('.bar-label')[index];
        if (labelEl) labelEl.textContent = label;
    });
    stats.weeklyData.forEach((completed, index) => {
        const barFill = document.getElementById(`barDay${index}`);
        if (barFill) {
            const height = completed ? '100%' : '20%';
            barFill.style.height = height;
        if (completed) {
            barFill.classList.add('completed');
        } else {
            barFill.classList.remove('completed');
        }
        barFill.title = completed ? 'Đã hoàn thành buổi tập' : 'Chưa hoàn thành buổi tập';
        }
    });
    
    // Update muscle groups
    const muscleGroups = stats.muscleGroups;
    Object.keys(muscleGroups).forEach(muscle => {
        const percent = muscleGroups[muscle];
        const percentEl = document.getElementById(`muscle${muscle}`);
        const barEl = document.getElementById(`muscleBar${muscle}`);
        if (percentEl) percentEl.textContent = percent + '%';
        if (barEl) barEl.style.width = percent + '%';
    });
    
    // Update secondary stats
    document.getElementById('statsCompletionRate').textContent = stats.completionRate + '%';
    document.getElementById('statsActiveDays').textContent = stats.activeDays;
    document.getElementById('statsAvgPerWeek').textContent = stats.avgPerWeek.toFixed(1);
    document.getElementById('statsBestStreak').textContent = stats.bestStreak;
    renderMonthlyChart(Number(document.getElementById('monthlyRange').value));
}

function renderMonthlyChart(monthCount) {
    const chart = document.getElementById('monthlyChart');
    if (!chart) return;

    const now = new Date();
    const months = [];

    for (let offset = monthCount - 1; offset >= 0; offset--) {
        const monthDate = new Date(now.getFullYear(), now.getMonth() - offset, 1, 12);
        const year = monthDate.getFullYear();
        const month = monthDate.getMonth();
        const lastDay = offset === 0
            ? now.getDate()
            : new Date(year, month + 1, 0).getDate();
        let scheduledDays = 0;
        let completedDays = 0;

        for (let day = 1; day <= lastDay; day++) {
            // Giờ trưa giúp ngày hiển thị luôn đúng ở múi giờ Việt Nam.
            const date = new Date(year, month, day, 12);
            const workout = getWorkoutForDate(date);
            if (!workout || workout.isRest || !isProgramDate(date)) continue;

            scheduledDays++;
            if (workoutProgress[formatDate(date)]?.completed) completedDays++;
        }

        months.push({
            label: `T${month + 1}/${String(year).slice(-2)}`,
            percent: scheduledDays ? Math.round((completedDays / scheduledDays) * 100) : 0,
            completedDays,
            scheduledDays,
            hasDataWindow: scheduledDays > 0
        });
    }

    chart.innerHTML = months.map(({ label, percent, completedDays, scheduledDays, hasDataWindow }) => `
        <div class="monthly-chart-bar ${hasDataWindow ? (percent === 0 ? 'zero' : '') : 'not-started'}" title="${hasDataWindow ? `${label}: ${percent}% (${completedDays}/${scheduledDays} buổi)` : `${label}: Trước khi bắt đầu lộ trình`}">
            <span class="monthly-percent">${hasDataWindow ? `${percent}%` : '—'}</span>
            <div class="monthly-bar-track"><span class="monthly-bar-fill" style="height:${hasDataWindow ? Math.max(percent, 3) : 3}%"></span></div>
            <span class="monthly-bar-label">${label}</span>
        </div>
    `).join('');
}

function calculateAllStats() {
    const allDates = Object.keys(workoutProgress).filter(isProgramDateKey);
    
    // Total workouts
    const totalWorkouts = allDates.filter(date => workoutProgress[date].completed).length;
    
    // This week workouts
    const weekDates = getCurrentWeekDates();
    const thisWeekWorkouts = weekDates.filter(date => {
        return isDayConfirmed(date);
    }).length;
    
    // Weekly data (last 7 days)
    const weeklyData = weekDates.map(date => {
        return isDayConfirmed(date);
    });
    
    // Current streak
    const currentStreak = calculateStreak();
    
    // Best streak
    let bestStreak = 0;
    let tempStreak = 0;
    const sortedDates = allDates.sort((a, b) => new Date(a) - new Date(b));
    
    sortedDates.forEach((date, index) => {
        if (workoutProgress[date].completed) {
            tempStreak++;
            bestStreak = Math.max(bestStreak, tempStreak);
        } else {
            tempStreak = 0;
        }
    });
    
    // Total exercises completed
    let totalExercises = 0;
    allDates.forEach(date => {
        const exercises = workoutProgress[date].exercises || {};
        totalExercises += Object.values(exercises).filter(Boolean).length;
    });
    
    // Muscle groups progress — dùng lịch đúng cho từng ngày trong tuần
    // Lịch mới (từ 24/8): Vai/Lưng/Ngực/Tay/Cẳng tay/Bụng (không có Chân)
    // Lịch cũ (trước 24/8): Vai/Lưng/Ngực/Tay/Cẳng tay/Bụng (map sang cấu trúc mới)
    const muscleGroupExercises = {
        Shoulders: 0, // Vai
        Back: 0,      // Lưng
        Chest: 0,     // Ngực
        Arms: 0,      // Tay
        Forearms: 0,  // Cẳng tay
        Abs: 0        // Bụng
    };

    // Tổng bài/nhóm cơ trong 1 tuần lịch mới (T2+T3+T5+T7)
    const muscleGroupTotal = {
        Shoulders: 7, // T2(3)+T5(4)
        Back: 5,      // T3(3)+T7(2)
        Chest: 5,     // T2(2)+T5(2)+T7(1)
        Arms: 5,      // T2(1)+T3(2)+T7(2)
        Forearms: 1,  // T7(1 Farmer Hold)
        Abs: 1        // T3(1 Knee Raise/Plank)
    };

    // Count exercises by muscle group from this week
    weekDates.forEach(date => {
        const dateStr = formatDate(date);
        const isNewSchedule = dateStr >= NEW_SCHEDULE_START_DATE;
        const workout = getWorkoutForDate(date);
        const dayKey = date.getDay();

        if (!workout || workout.isRest) return;

        const dayProgress = workoutProgress[dateStr] || {};
        // Một ngày đã được xác nhận hoàn thành phải tính đủ toàn bộ bài của ngày đó,
        // kể cả dữ liệu cũ chưa lưu từng checkbox riêng lẻ.
        const completedIndexes = dayProgress.completed
            ? (workout.exercises || []).map((_, index) => index)
            : Object.keys(dayProgress.exercises || {})
                .filter(index => dayProgress.exercises[index])
                .map(Number);

        if (isNewSchedule) {
            // ─── Lịch mới (T2/T3/T5/T7 tập; T4/T6/CN nghỉ) ─────────────────
            completedIndexes.forEach(index => {
                if (dayKey === 1) {
                    // T2: 0=Shoulder Press, 1=Lateral Raise, 2=Rear-delt Fly → Vai
                    //     3=Bench Press, 4=Incline → Ngực
                    //     5=Overhead Triceps Ext → Tay
                    if (index <= 2) muscleGroupExercises.Shoulders++;
                    else if (index <= 4) muscleGroupExercises.Chest++;
                    else muscleGroupExercises.Arms++;
                } else if (dayKey === 2) {
                    // T3: 0=Pull-up, 1=DB Row, 2=Band Pulldown → Lưng
                    //     3=DB Curl, 4=Hammer Curl → Tay
                    //     5=Hanging Knee Raise/Plank → Bụng
                    if (index <= 2) muscleGroupExercises.Back++;
                    else if (index <= 4) muscleGroupExercises.Arms++;
                    else muscleGroupExercises.Abs++;
                } else if (dayKey === 4) {
                    // T5: 0=Lateral Raise, 1=Band Lateral, 2=Rear-delt Fly, 3=Face Pull → Vai
                    //     4=Incline Press, 5=Band Chest Press → Ngực
                    if (index <= 3) muscleGroupExercises.Shoulders++;
                    else muscleGroupExercises.Chest++;
                } else if (dayKey === 6) {
                    // T7: 0=Bench Press → Ngực
                    //     1=Pull-up, 2=DB Row → Lưng
                    //     3=Hammer Curl, 4=Band Triceps Pushdown → Tay
                    //     5=Farmer Hold → Cẳng tay
                    if (index === 0) muscleGroupExercises.Chest++;
                    else if (index <= 2) muscleGroupExercises.Back++;
                    else if (index <= 4) muscleGroupExercises.Arms++;
                    else muscleGroupExercises.Forearms++;
                }
            });
        } else {
            // ─── Lịch cũ (trước 24/8) — map sang cấu trúc nhóm cơ mới ────────
            completedIndexes.forEach(index => {
                if (dayKey === 1) { // T2 cũ: Ngực/Vai/Tay
                    if (index <= 2) muscleGroupExercises.Chest++;
                    else if (index === 3) muscleGroupExercises.Shoulders++;
                    else muscleGroupExercises.Arms++;
                } else if (dayKey === 2) { // T3 cũ: Lưng/Vai sau/Tay
                    if (index <= 2) muscleGroupExercises.Back++;
                    else if (index === 3) muscleGroupExercises.Shoulders++;
                    else muscleGroupExercises.Arms++;
                } else if (dayKey === 5) { // T6 cũ: Vai/Ngực/Tay
                    if (index <= 4) muscleGroupExercises.Shoulders++;
                    else if (index === 5) muscleGroupExercises.Chest++;
                    else muscleGroupExercises.Arms++;
                } else if (dayKey === 6) { // T7 cũ: Lưng/Tay/Bụng
                    if (index <= 2) muscleGroupExercises.Back++;
                    else if (index <= 6) muscleGroupExercises.Arms++;
                    else muscleGroupExercises.Abs++;
                }
                // T4 (Chân cũ), T3(key=3 cũ - chân), CN (Chân cũ) bỏ qua
            });
        }
    });

    
    // Calculate percentages
    const muscleGroups = {};
    Object.keys(muscleGroupExercises).forEach(muscle => {
        muscleGroups[muscle] = Math.round((muscleGroupExercises[muscle] / muscleGroupTotal[muscle]) * 100);
    });
    
    // Completion rate
    const totalPossible = allDates.length;
    const completionRate = totalPossible > 0 ? Math.round((totalWorkouts / totalPossible) * 100) : 0;
    
    // Active days
    const activeDays = allDates.length;
    const missedDays = calculateMissedDays();
    
    // Average per week
    const weeks = activeDays > 0 ? Math.ceil(activeDays / 7) : 1;
    const avgPerWeek = totalWorkouts / weeks;
    
    return {
        totalWorkouts,
        thisWeekWorkouts,
        weeklyData,
        currentStreak,
        bestStreak,
        totalExercises,
        muscleGroups,
        completionRate,
        activeDays,
        avgPerWeek,
        missedDays
    };
}

function calculateMissedDays() {
    const programStart = new Date(2025, 11, 31, 12);
    const today = new Date();
    // Chỉ chốt một ngày là bỏ tập khi ngày đó đã kết thúc; ngày hiện tại và tương lai không bị tính.
    const lastCompletedDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1, 12);
    let missedDays = 0;

    for (const date = new Date(programStart); date <= lastCompletedDay; date.setDate(date.getDate() + 1)) {
        const workout = getWorkoutForDate(date);
        if (!workout || workout.isRest) continue;

        if (!workoutProgress[formatDate(date)]?.completed) missedDays++;
    }

    return missedDays;
}

function setupMobileMenu() {
    const mobileToggle = document.getElementById('mobileMenuToggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarClose = document.getElementById('sidebarClose');
    const overlay = document.createElement('div');
    overlay.className = 'sidebar-overlay';
    
    mobileToggle.addEventListener('click', () => {
        sidebar.classList.add('active');
        document.body.appendChild(overlay);
        document.body.style.overflow = 'hidden';
    });
    
    sidebarClose.addEventListener('click', closeMobileMenu);
    
    overlay.addEventListener('click', closeMobileMenu);
}

function closeMobileMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.sidebar-overlay');
    
    sidebar.classList.remove('active');
    if (overlay) {
        overlay.remove();
    }
    document.body.style.overflow = '';
}

function setupEventListeners() {
    document.getElementById('prevWeek').addEventListener('click', () => {
        if (isBeforeProgramStartWeek(currentWeekOffset - 1)) {
            showToast('Không phải thời gian bắt đầu.', 'error');
            return;
        }
        currentWeekOffset--;
        activeDayIndex = 0;
        renderWorkouts();
    });

    document.getElementById('nextWeek').addEventListener('click', () => {
        currentWeekOffset++;
        activeDayIndex = 0;
        renderWorkouts();
    });

    document.getElementById('closeModal').addEventListener('click', closeModal);
    
    document.getElementById('exerciseModal').addEventListener('click', (e) => {
        if (e.target.id === 'exerciseModal') {
            closeModal();
        }
    });

    document.getElementById('monthlyRange').addEventListener('change', event => {
        renderMonthlyChart(Number(event.target.value));
    });

    const dataMenu = document.querySelector('.data-menu');
    document.addEventListener('click', event => {
        if (dataMenu?.open && !dataMenu.contains(event.target)) dataMenu.removeAttribute('open');
    });
    dataMenu?.addEventListener('click', event => {
        if (event.target.closest('.data-menu-list button')) dataMenu.removeAttribute('open');
    });
    document.addEventListener('keydown', event => {
        if (event.key !== 'Escape') return;

        const exerciseModal = document.getElementById('exerciseModal');
        if (exerciseModal?.classList.contains('active')) {
            closeModal();
            return;
        }

        if (dataMenu?.open) dataMenu.removeAttribute('open');
    });
}

function getWeekDates() {
    return getWeekDatesForOffset(currentWeekOffset);
}

function getCurrentWeekDates() {
    return getWeekDatesForOffset(0);
}

function getWeekDatesForOffset(weekOffset) {
    const now = new Date();
    const startOfWeek = new Date(now);
    const mondayOffset = (now.getDay() + 6) % 7;
    startOfWeek.setDate(now.getDate() - mondayOffset + (weekOffset * 7));
    
    const dates = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date(startOfWeek);
        date.setDate(startOfWeek.getDate() + i);
        dates.push(date);
    }
    
    return dates;
}

function isBeforeProgramStartWeek(weekOffset) {
    const requestedWeekStart = getWeekDatesForOffset(weekOffset)[0];
    const programStart = new Date(2025, 11, 31, 12);
    const programWeekStart = new Date(programStart);
    programWeekStart.setDate(programStart.getDate() - ((programStart.getDay() + 6) % 7));
    programWeekStart.setHours(0, 0, 0, 0);
    requestedWeekStart.setHours(0, 0, 0, 0);
    return requestedWeekStart < programWeekStart;
}

function formatDate(date) {
    return date.toISOString().split('T')[0];
}

function isProgramDate(date) {
    return formatDate(date) >= PROGRAM_START_DATE;
}

function isProgramDateKey(dateKey) {
    return typeof dateKey === 'string' && dateKey >= PROGRAM_START_DATE;
}

function renderWorkouts() {
    const container = document.getElementById('workoutContainer');
    const calendar = document.getElementById('weekCalendar');
    const dates = getWeekDates();
    const weekDisplay = document.getElementById('weekDisplay');
    
    if (currentWeekOffset === 0) {
        weekDisplay.textContent = 'Tuần này';
    } else if (currentWeekOffset === 1) {
        weekDisplay.textContent = 'Tuần sau';
    } else if (currentWeekOffset === -1) {
        weekDisplay.textContent = 'Tuần trước';
    } else {
        const firstDate = dates[0];
        weekDisplay.textContent = `Tuần ${firstDate.getDate()}/${firstDate.getMonth() + 1}`;
    }
    
    calendar.innerHTML = dates.map((date, index) => {
        const workout = getWorkoutForDate(date);
        const dateStr = formatDate(date);
        const completed = isDayConfirmed(date);
        const isToday = formatDate(date) === formatDate(new Date());
        const dayShort = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'][date.getDay()];
        const state = completed ? 'completed' : workout.isRest ? 'rest' : '';
        return `
            <button class="calendar-day ${activeDayIndex === index ? 'active' : ''} ${isToday ? 'today' : ''} ${state}" onclick="selectWorkoutDay(${index})" aria-pressed="${activeDayIndex === index}">
                ${isToday ? '<div class="today-arrow"></div>' : ''}
                <span class="calendar-day-name">${dayShort}</span>
                <strong>${date.getDate()}</strong>
                <span class="calendar-day-status">${workout.isRest && completed ? 'Nghỉ theo lịch' : workout.isRest ? workout.focus : completed ? 'Hoàn thành' : isToday ? 'Hôm nay' : workout.focus}</span>
            </button>
        `;
    }).join('');

    const date = dates[activeDayIndex] || dates[0];
    const workout = getWorkoutForDate(date);
    const dateStr = formatDate(date);
    const isCompleted = isDayConfirmed(date);
    container.innerHTML = '';
    container.appendChild(createWorkoutCard(workout, date, dateStr, isCompleted));
    
    updateStats();
}

function selectWorkoutDay(index) {
    activeDayIndex = index;
    renderWorkouts();
}

function createWorkoutCard(workout, date, dateStr, isCompleted) {
    const card = document.createElement('div');
    card.className = `workout-card ${isCompleted ? 'completed' : ''} ${workout.isRest ? 'rest' : ''}`;
    
    const dateDisplay = `${date.getDate()}/${date.getMonth() + 1}`;
    
    if (workout.isRest) {
        const restConfirmed = isAutoConfirmedRestDay(date);
        card.innerHTML = `
            <div class="workout-header">
                <div class="day-info">
                    <h3>${workout.name}</h3>
                    <div class="day-name">${dateDisplay}</div>
                    <div class="focus">${workout.focus}</div>
                    ${workout.subtitle ? `<div class="subtitle">${workout.subtitle}</div>` : ''}
                </div>
                <input type="checkbox" class="complete-checkbox" ${restConfirmed ? 'checked' : ''} disabled
                       title="${restConfirmed ? 'Nghỉ theo lịch đã được hệ thống xác nhận' : 'Ngày nghỉ này chưa tới'}" aria-label="${restConfirmed ? 'Nghỉ theo lịch đã xác nhận' : 'Ngày nghỉ chưa tới'}">
            </div>
        `;
    } else {
        // Check if all exercises are completed
        const totalExercises = workout.exercises.length;
        const completedExercises = Object.values(workoutProgress[dateStr]?.exercises || {}).filter(Boolean).length;
        const allExercisesCompleted = completedExercises === totalExercises && totalExercises > 0;
        
        const exerciseList = workout.exercises.map((ex, idx) => {
            const exCompleted = workoutProgress[dateStr]?.exercises?.[idx] || false;
            return `
                <li class="exercise-item ${exCompleted ? 'completed' : ''}" 
                    onclick="openExerciseDetail('${dateStr}', ${idx})">
                    <span class="exercise-name">${ex.name}</span>
                    <span class="exercise-sets">${ex.sets}</span>
                    <input type="checkbox" class="exercise-checkbox" ${exCompleted ? 'checked' : ''}
                           onclick="event.stopPropagation(); toggleExerciseComplete('${dateStr}', ${idx})">
                </li>
            `;
        }).join('');
        
        card.innerHTML = `
            <div class="workout-header">
                <div class="day-info">
                    <h3>${workout.name}</h3>
                    <div class="day-name">${dateDisplay}</div>
                    <div class="focus">${workout.focus}</div>
                    ${workout.subtitle ? `<div class="subtitle">${workout.subtitle}</div>` : ''}
                </div>
                <div class="header-actions-card">
                    <button class="quick-action-btn" onclick="event.stopPropagation(); toggleAllExercises('${dateStr}', ${!allExercisesCompleted})"
                            title="${allExercisesCompleted ? 'Bỏ tick tất cả' : 'Tick tất cả'}">
                        <span class="btn-icon">${allExercisesCompleted ? '↩️' : '✅'}</span>
                        <span class="btn-label">${allExercisesCompleted ? 'Bỏ Hết' : 'Tick Hết'}</span>
                    </button>
                    <input type="checkbox" class="complete-checkbox" ${isCompleted ? 'checked' : ''}
                           onchange="toggleDayComplete('${dateStr}')" title="Hoàn thành ngày">
                </div>
            </div>
            <ul class="exercise-list">
                ${exerciseList}
            </ul>
        `;
    }
    
    return card;
}

function toggleDayComplete(dateStr) {
    if (!workoutProgress[dateStr]) {
        workoutProgress[dateStr] = { completed: false, exercises: {} };
    }
    workoutProgress[dateStr].completed = !workoutProgress[dateStr].completed;
    saveProgress(dateStr);
    renderWorkouts();
}

function toggleExerciseComplete(dateStr, exerciseIdx) {
    if (!workoutProgress[dateStr]) {
        workoutProgress[dateStr] = { completed: false, exercises: {} };
    }
    if (!workoutProgress[dateStr].exercises) {
        workoutProgress[dateStr].exercises = {};
    }
    workoutProgress[dateStr].exercises[exerciseIdx] = !workoutProgress[dateStr].exercises[exerciseIdx];
    saveProgress(dateStr);
    renderWorkouts();
}

function toggleAllExercises(dateStr, checkAll) {
    const date = new Date(`${dateStr}T12:00:00`);
    const workout = getWorkoutForDate(dateStr);
    
    if (!workout || workout.isRest) return;
    
    if (!workoutProgress[dateStr]) {
        workoutProgress[dateStr] = { completed: false, exercises: {} };
    }
    if (!workoutProgress[dateStr].exercises) {
        workoutProgress[dateStr].exercises = {};
    }
    
    // Toggle all exercises
    workout.exercises.forEach((ex, idx) => {
        workoutProgress[dateStr].exercises[idx] = checkAll;
    });
    
    saveProgress(dateStr);
    renderWorkouts();
}

function openExerciseDetail(dateStr, exerciseIdx) {
    const workout = getWorkoutForDate(dateStr);
    const exercise = workout.exercises[exerciseIdx];
    
    const modal = document.getElementById('exerciseModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    modalTitle.textContent = exercise.name;
    
    const notes = workoutProgress[dateStr]?.notes?.[exerciseIdx] || '';
    
    const imageSource = exercise.image?.startsWith('http') ? exercise.image : `images/${exercise.image}`;
    const imageHTML = exercise.image ? `
        <div class="exercise-image">
            <img src="${imageSource}" alt="${exercise.name}" onerror="this.style.display='none'">
        </div>
    ` : '';
    
    modalBody.innerHTML = `
        ${imageHTML}
        
        <div class="exercise-detail">
            <h3>Chi tiết bài tập</h3>
            <p><strong>Hiệp × Số lần:</strong> ${exercise.sets}</p>
            ${exercise.notes ? `<p><strong>Tác động:</strong> ${exercise.notes}</p>` : ''}
        </div>
        
        ${exercise.technique ? `
            <div class="technique-section">
            <h4>Kỹ thuật thực hiện</h4>
                <p>${exercise.technique}</p>
            </div>
        ` : ''}
        
        <div class="notes-section">
            <h4>Ghi chú cá nhân</h4>
            <textarea id="exerciseNotes" placeholder="Cảm nhận, điều chỉnh...">${notes}</textarea>
            <button class="save-log-btn" onclick="saveExerciseNotes('${dateStr}', ${exerciseIdx}, this)" 
                    style="margin-top: 0.5rem;">
                Lưu ghi chú
            </button>
        </div>
    `;
    
    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('exerciseModal').classList.remove('active');
}

function saveExerciseNotes(dateStr, exerciseIdx, btn) {
    const notes = document.getElementById('exerciseNotes').value;
    
    if (!workoutProgress[dateStr]) {
        workoutProgress[dateStr] = { completed: false, exercises: {}, notes: {} };
    }
    if (!workoutProgress[dateStr].notes) {
        workoutProgress[dateStr].notes = {};
    }
    
    workoutProgress[dateStr].notes[exerciseIdx] = notes;
    saveProgress(dateStr);
    
    // Show feedback
    if (btn) {
        const originalText = btn.textContent;
        btn.textContent = '✓ Đã lưu';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 1500);
    }
}

function updateStats() {
    const dates = getWeekDates();
    let completedDays = 0;
    
    dates.forEach(date => {
        if (isDayConfirmed(date)) {
            completedDays++;
        }
    });
    
    const progressText = `${completedDays}/7`;
    document.getElementById('weekProgress').textContent = progressText;
    document.getElementById('sidebarWeekProgress').textContent = progressText;
    const progressFill = document.getElementById('sidebarProgressFill');
    if (progressFill) progressFill.style.width = `${(completedDays / 7) * 100}%`;
    
    // Calculate streak
    const streak = calculateStreak();
    const streakText = `${streak}`;
    document.getElementById('streak').textContent = streakText;
    document.getElementById('sidebarStreak').textContent = `${streak} 🔥`;
}

function isAutoConfirmedRestDay(date) {
    const workout = getWorkoutForDate(date);
    if (!workout?.isRest || !isProgramDate(date)) return false;

    const comparedDate = new Date(date);
    comparedDate.setHours(5, 30, 0, 0); // Ngày nghỉ tích vào lúc 5:30 sáng
    const now = new Date();
    // Ngày nghỉ được tự động xác nhận khi đã qua 5:30 sáng của ngày đó
    return now >= comparedDate;
}

function isDayConfirmed(date) {
    return isProgramDate(date) && (isAutoConfirmedRestDay(date) || Boolean(workoutProgress[formatDate(date)]?.completed));
}

function calculateStreak() {
    const today = new Date();
    let streak = 0;
    
    for (let i = 0; i < 365; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        if (!isProgramDate(date)) break;
        const dateStr = formatDate(date);
        
        if (workoutProgress[dateStr]?.completed) {
            streak++;
        } else if (i > 0) {
            break;
        }
    }
    
    return streak;
}

function saveProgress(dateStr = null) {
    localStorage.setItem('gymTrackerProgress', JSON.stringify(workoutProgress));
    if (dateStr) void syncWorkoutDay(dateStr);
}

function loadProgress() {
    const saved = localStorage.getItem('gymTrackerProgress');
    return saved ? JSON.parse(saved) : {};
}

function getCloudAccessToken() {
    return sessionStorage.getItem(CLOUD_ACCESS_TOKEN_KEY);
}

function hasActiveCloudAccessToken() {
    const token = getCloudAccessToken();
    const payload = token?.split('.')[0];
    if (!payload) return false;

    try {
        const base64 = payload.replace(/-/g, '+').replace(/_/g, '/');
        const padded = base64 + '='.repeat((4 - base64.length % 4) % 4);
        const data = JSON.parse(decodeURIComponent(Array.from(atob(padded), byte =>
            `%${byte.charCodeAt(0).toString(16).padStart(2, '0')}`
        ).join('')));
        return data.scope === 'sync' && Number.isFinite(data.exp) && data.exp > Date.now();
    } catch {
        return false;
    }
}

function redirectToLockScreen() {
    sessionStorage.removeItem(CLOUD_ACCESS_TOKEN_KEY);
    sessionStorage.setItem(
        APP_LOCK_RETURN_KEY,
        `${window.location.pathname}${window.location.search}${window.location.hash}`
    );
    window.location.replace('lock.html');
}

async function cloudRequest(path, options = {}) {
    const token = getCloudAccessToken();
    if (!token) throw new Error('Chưa kết nối dữ liệu đám mây.');

    const response = await fetch(`${WORKER_API_URL}${path}`, {
        ...options,
        headers: {
            'Authorization': `Bearer ${token}`,
            ...(options.body ? { 'Content-Type': 'application/json' } : {}),
            ...(options.headers || {})
        }
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok || result.ok === false) {
        if (response.status === 401) {
            redirectToLockScreen();
        }
        throw new Error(result.detail || result.message || 'Không thể đồng bộ dữ liệu.');
    }
    return result;
}

function buildWorkoutDayRow(dateStr) {
    const date = new Date(`${dateStr}T12:00:00`);
    const workout = getWorkoutForDate(dateStr);
    const progress = workoutProgress[dateStr] || {};
    const completedCount = Object.values(progress.exercises || {}).filter(Boolean).length;
    const weekdayNames = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];

    return {
        workout_date: dateStr,
        weekday_name: weekdayNames[date.getDay()],
        workout_plan: workout?.focus || 'Chưa có lịch',
        status: workout ? getWorkoutStatus(date, workout) : 'Chưa đến lịch',
        completed_count: completedCount,
        total_exercises: workout?.exercises?.length || 0,
        workout_minutes: getWorkoutMinutesForDate(date),
        exercise_state: progress.exercises || {},
        exercise_notes: progress.notes || {},
        completed_at: progress.completed ? new Date().toISOString() : null
    };
}

async function syncWorkoutDay(dateStr) {
    if (!getCloudAccessToken() || !workoutProgress[dateStr]) return;
    try {
        await cloudRequest('/data/workout-day', {
            method: 'PUT',
            body: JSON.stringify({ row: buildWorkoutDayRow(dateStr) })
        });
    } catch {}
}

function toCloudSession(session) {
    return {
        client_id: String(session.id),
        started_at: new Date(session.date).toISOString(),
        duration_seconds: Math.round(session.duration / 1000)
    };
}

async function syncStopwatchSession(session) {
    if (!getCloudAccessToken()) return;
    try {
        await cloudRequest('/data/stopwatch-session', {
            method: 'PUT',
            body: JSON.stringify({ session: toCloudSession(session) })
        });
    } catch {}
}

async function syncAllCloudData() {
    if (!getCloudAccessToken()) return;
    const startDate = new Date(`${PROGRAM_START_DATE}T12:00:00`);
    const today = new Date();
    today.setHours(12, 0, 0, 0);
    const rows = [];

    for (const date = new Date(startDate); date <= today; date.setDate(date.getDate() + 1)) {
        rows.push(buildWorkoutDayRow(formatDate(date)));
    }

    await cloudRequest('/data/workout-days', {
        method: 'PUT',
        body: JSON.stringify({ rows })
    });
    await Promise.all(stopwatchHistory.map(syncStopwatchSession));
}

function applyCloudData(cloud) {
    workoutProgress = (cloud.workoutDays || []).reduce((all, row) => {
        all[row.workout_date] = {
            completed: row.status === 'Hoàn thành',
            exercises: row.exercise_state || {},
            notes: row.exercise_notes || {}
        };
        return all;
    }, {});

    stopwatchHistory = (cloud.sessions || []).map(session => {
        const date = new Date(session.started_at);
        const numericId = Number(session.client_id);
        return {
            id: Number.isSafeInteger(numericId) ? numericId : session.client_id,
            duration: session.duration_seconds * 1000,
            date: date.toISOString(),
            dateDisplay: date.toLocaleString('vi-VN')
        };
    });
    saveProgress();
    saveStopwatchHistory();
    renderWorkouts();
    updateStats();
    updateStopwatchHistory();
}

async function bootstrapCloudSync() {
    if (!getCloudAccessToken()) {
        return;
    }

    try {
        const cloud = await cloudRequest('/data/bootstrap');
        const hasCloudData = cloud.workoutDays?.length || cloud.sessions?.length;
    if (hasCloudData) {
      applyCloudData(cloud);
    }

    // Đồng bộ toàn bộ các ngày từ mốc bắt đầu đến hôm nay. Nhờ vậy những ngày
    // đã qua nhưng chưa tập cũng được lưu là "Bỏ tập", giống báo cáo Excel.
    await syncAllCloudData();
    } catch {}
}

// Chủ nhật từng là ngày nghỉ. Dữ liệu cũ chỉ được hệ thống tự xác nhận,
// không có bài tập nào; bỏ xác nhận đó một lần để Chủ nhật trở thành buổi tập thật.
function migrateSundayRestProgress() {
    if (localStorage.getItem(SUNDAY_TRAINING_MIGRATION_KEY)) return;

    let changed = false;
    Object.entries(workoutProgress).forEach(([dateKey, progress]) => {
        const date = new Date(`${dateKey}T12:00:00`);
        const hasCompletedExercise = Object.values(progress.exercises || {}).some(Boolean);

        if (date.getDay() === 0 && progress.completed && !hasCompletedExercise) {
            delete progress.completed;
            delete progress.exercises;
            changed = true;
        }
    });

    if (changed) saveProgress();
    localStorage.setItem(SUNDAY_TRAINING_MIGRATION_KEY, '1');
}

// Export and Import functions
function exportData() {
    showConfirm({
        title: 'Xuất dữ liệu?',
        message: 'Tạo một file sao lưu dữ liệu Gym Tracker trên máy này?',
        confirmLabel: 'Xuất dữ liệu',
        onConfirm: downloadDataBackup
    });
}

function downloadDataBackup() {
    const backup = { workoutProgress, stopwatchHistory, exportedAt: new Date().toISOString() };
    const dataStr = JSON.stringify(backup, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `gym-tracker-backup-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
    showToast('Đã xuất bản sao lưu JSON.', 'success');
}

function importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            try {
                const imported = JSON.parse(event.target.result);
                workoutProgress = imported.workoutProgress || imported;
                if (Array.isArray(imported.stopwatchHistory)) stopwatchHistory = imported.stopwatchHistory;
                saveProgress();
                saveStopwatchHistory();
                renderWorkouts();
                updateStopwatchHistory();
                void syncAllCloudData();
                showToast('Đã nhập dữ liệu thành công.', 'success');
            } catch (error) {
                showToast('File JSON không hợp lệ.', 'error');
            }
        };
        reader.readAsText(file);
    };
    input.click();
}

function clearAllData() {
    showConfirm({
        title: 'Xóa toàn bộ dữ liệu?',
        message: 'Data sẽ mất hết. Nhập mật khẩu để xác nhận.',
        confirmLabel: 'Xóa dữ liệu',
        danger: true,
        passwordAction: 'delete',
        onConfirm: async password => {
        if (getCloudAccessToken()) {
            try {
                await cloudRequest('/data/all', {
                    method: 'DELETE',
                    body: JSON.stringify({ password })
                });
            } catch (error) {
                showToast(error.message || 'Chưa thể xóa dữ liệu đám mây. Dữ liệu trên máy vẫn được giữ nguyên.', 'error');
                return;
            }
        }
        workoutProgress = {};
        stopwatchHistory = [];
        saveProgress();
        saveStopwatchHistory();
        renderWorkouts();
        updateStopwatchHistory();
        showToast('Đã xóa dữ liệu.', 'success');
        }
    });
}

function getWorkoutStatus(date, workout) {
    if (!isProgramDate(date)) return 'Chưa bắt đầu';
    if (workout.isRest) return 'Nghỉ theo lịch';
    const today = new Date();
    today.setHours(23, 59, 59, 999);
    if (date > today) return 'Chưa đến lịch';
    return workoutProgress[formatDate(date)]?.completed ? 'Hoàn thành' : 'Bỏ tập';
}

function getWorkoutMinutesForDate(date) {
    const dateKey = formatDate(date);
    return Math.round(stopwatchHistory
        .filter(session => formatDate(new Date(session.date)) === dateKey)
        .reduce((total, session) => total + session.duration, 0) / 60000);
}

function escapeXml(value) {
    return String(value ?? '').replace(/[<>&'\"]/g, char => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }[char]));
}

// New function: Export comprehensive migration report (old schedule vs new schedule)


function exportWeeklyReport(weeks) {
    showConfirm({
        title: `Xuất thống kê ${weeks} tuần?`,
        message: 'Tạo file Excel thống kê từ dữ liệu hiện có?',
        confirmLabel: 'Xuất Excel',
        onConfirm: () => downloadWeeklyReport(weeks)
    });
}

function downloadWeeklyReport(weeks) {
    const today = new Date();
    const start = new Date(today);
    const mondayOffset = (start.getDay() + 6) % 7;
    start.setDate(start.getDate() - mondayOffset - ((weeks - 1) * 7));
    const rows = [];

    for (let offset = 0; offset < weeks * 7; offset++) {
        const date = new Date(start);
        date.setDate(start.getDate() + offset);
        date.setHours(12, 0, 0, 0);
        const workout = getWorkoutForDate(date);
        const progress = workoutProgress[formatDate(date)] || {};
        const exerciseCount = workout.exercises.length;
        const completedExercises = Object.values(progress.exercises || {}).filter(Boolean).length;
        rows.push([
            formatDate(date),
            workout.name,
            workout.focus,
            getWorkoutStatus(date, workout),
            completedExercises,
            exerciseCount,
            getWorkoutMinutesForDate(date),
            Object.keys(progress.notes || {}).length
        ]);
    }

    // Ngày mới nhất đứng trên cùng để mở báo cáo là xem được dữ liệu gần đây ngay.
    rows.reverse();

    const headings = ['Ngày', 'Thứ', 'Nhóm cơ / lịch', 'Trạng thái', 'Bài đã xong', 'Tổng bài', 'Bấm giờ (phút)', 'Ghi chú'];
    const cell = (value, styleId = 'text', type = 'String') =>
        `<Cell ss:StyleID="${styleId}"><Data ss:Type="${type}">${escapeXml(value)}</Data></Cell>`;
    const statusStyle = status => ({
        'Hoàn thành': 'status-good',
        'Bỏ tập': 'status-bad',
        'Nghỉ theo lịch': 'status-rest',
        'Chưa đến lịch': 'status-future',
        'Chưa bắt đầu': 'status-future'
    }[status] || 'text');
    const toReportCells = ([date, day, focus, status, completed, total, minutes, notes]) => [
        cell(date),
        cell(day),
        cell(focus),
        cell(status, statusStyle(status)),
        cell(completed, status === 'Nghỉ theo lịch' ? 'number-rest' : completed > 0 ? 'number-good' : 'number-bad', 'Number'),
        cell(total, 'number', 'Number'),
        cell(minutes, 'number', 'Number'),
        cell(notes, 'number', 'Number')
    ].join('');

    // SpreadsheetML sử dụng đơn vị point: các giá trị dưới đây tương ứng lần lượt
    // với khoảng 111px, 98px, 226px, 171px, 171px, 171px và 112px trong Excel.
    const columnWidths = [83.25, 73.5, 169.5, 128.25, 128.25, 128.25, 84];
    const columns = columnWidths.map(width => `<Column ss:AutoFitWidth="0" ss:Width="${width}"/>`).join('');
    const bodyBorders = '<Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#D5DCE5"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#D5DCE5"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#D5DCE5"/><Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#D5DCE5"/></Borders>';
    const headerBorders = '<Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#34445C"/><Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#34445C"/><Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#34445C"/><Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#34445C"/></Borders>';
    const spreadsheetStyles = `<Styles>
        <Style ss:ID="header"><Font ss:Bold="1" ss:Color="#FFFFFF"/><Interior ss:Color="#18263D" ss:Pattern="Solid"/><Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="1"/>${headerBorders}</Style>
        <Style ss:ID="text"><Alignment ss:Vertical="Center" ss:WrapText="1"/>${bodyBorders}</Style>
        <Style ss:ID="number"><Alignment ss:Horizontal="Center" ss:Vertical="Center"/>${bodyBorders}</Style>
        <Style ss:ID="status-good"><Font ss:Color="#006100"/><Interior ss:Color="#C6EFCE" ss:Pattern="Solid"/><Alignment ss:Vertical="Center" ss:WrapText="1"/>${bodyBorders}</Style>
        <Style ss:ID="status-bad"><Font ss:Color="#9C0006"/><Interior ss:Color="#FFC7CE" ss:Pattern="Solid"/><Alignment ss:Vertical="Center" ss:WrapText="1"/>${bodyBorders}</Style>
        <Style ss:ID="status-rest"><Font ss:Color="#595959"/><Interior ss:Color="#E7E6E6" ss:Pattern="Solid"/><Alignment ss:Vertical="Center" ss:WrapText="1"/>${bodyBorders}</Style>
        <Style ss:ID="status-future"><Font ss:Color="#1F2937"/><Interior ss:Color="#FFFFFF" ss:Pattern="Solid"/><Alignment ss:Vertical="Center" ss:WrapText="1"/>${bodyBorders}</Style>
        <Style ss:ID="number-good"><Font ss:Color="#006100"/><Interior ss:Color="#C6EFCE" ss:Pattern="Solid"/><Alignment ss:Horizontal="Center" ss:Vertical="Center"/>${bodyBorders}</Style>
        <Style ss:ID="number-bad"><Font ss:Color="#9C0006"/><Interior ss:Color="#FFC7CE" ss:Pattern="Solid"/><Alignment ss:Horizontal="Center" ss:Vertical="Center"/>${bodyBorders}</Style>
        <Style ss:ID="number-rest"><Font ss:Color="#595959"/><Interior ss:Color="#E7E6E6" ss:Pattern="Solid"/><Alignment ss:Horizontal="Center" ss:Vertical="Center"/>${bodyBorders}</Style>
    </Styles>`;
    const xml = `<?xml version="1.0"?><?mso-application progid="Excel.Sheet"?><Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">${spreadsheetStyles}<Worksheet ss:Name="Báo cáo ${weeks} tuần"><Table>${columns}<Row ss:Height="25" ss:StyleID="header">${headings.map(heading => cell(heading, 'header')).join('')}</Row>${rows.map(row => `<Row ss:Height="22">${toReportCells(row)}</Row>`).join('')}</Table></Worksheet></Workbook>`;
    const blob = new Blob([xml], { type: 'application/vnd.ms-excel;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `gym-tracker-bao-cao-${weeks}-tuan-${formatDate(today)}.xls`;
    link.click();
    URL.revokeObjectURL(url);
    showToast(`Đã xuất báo cáo ${weeks} tuần dạng Excel.`, 'success');
}

// ==================== LIVE CLOCK ====================
function startLiveClock() {
    let renderedDate = formatDate(new Date());
    function updateClock() {
        const now = new Date();
        
        // Time
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const timeStr = `${hours}:${minutes}:${seconds}`;
        
        // Date
        const days = ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];
        const day = days[now.getDay()];
        const date = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        const dateStr = `${day}, ${date}/${month}/${year}`;
        
        const timeEl = document.getElementById('liveTime');
        const dateEl = document.getElementById('liveDate');
        
        if (timeEl) timeEl.textContent = timeStr;
        if (dateEl) dateEl.textContent = dateStr;
        updateSmokeFreeCounter(now);

        const todayKey = formatDate(now);
        if (todayKey !== renderedDate) {
            renderedDate = todayKey;
            currentWeekOffset = 0;
            activeDayIndex = (now.getDay() + 6) % 7;
            renderWorkouts();
            void syncAllCloudData();
        }
    }
    
    updateClock();
    setInterval(updateClock, 1000);
}

function updateSmokeFreeCounter(now = new Date()) {
    const counterEl = document.getElementById('smokeFreeDays');
    if (!counterEl) return;

    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const elapsedDays = Math.floor((today - SMOKE_FREE_START_DATE) / 86400000);
    // Tính cả ngày 14/07/2026 là ngày đầu tiên bỏ thuốc.
    counterEl.textContent = Math.max(0, elapsedDays + 1).toLocaleString('vi-VN');
}

// ==================== STOPWATCH ====================
function startStopwatch() {
    if (!stopwatchRunning) {
        stopwatchRunning = true;
        const startTime = Date.now() - stopwatchTime;
        
        stopwatchInterval = setInterval(() => {
            stopwatchTime = Date.now() - startTime;
            updateStopwatchDisplay();
        }, 10);
        
        document.getElementById('startBtn').disabled = true;
        document.getElementById('pauseBtn').disabled = false;
        document.getElementById('resetBtn').disabled = false;
        document.getElementById('sessionStatus').textContent = 'Đang tập...';
    }
}

function pauseStopwatch() {
    if (stopwatchRunning) {
        stopwatchRunning = false;
        clearInterval(stopwatchInterval);
        
        document.getElementById('startBtn').disabled = false;
        document.getElementById('pauseBtn').disabled = true;
        document.getElementById('saveBtn').disabled = false;
        document.getElementById('sessionStatus').textContent = 'Đã tạm dừng';
    }
}

function resetStopwatch() {
    stopwatchRunning = false;
    stopwatchTime = 0;
    clearInterval(stopwatchInterval);
    updateStopwatchDisplay();
    
    document.getElementById('startBtn').disabled = false;
    document.getElementById('pauseBtn').disabled = true;
    document.getElementById('resetBtn').disabled = true;
    document.getElementById('saveBtn').disabled = true;
    document.getElementById('sessionStatus').textContent = 'Chưa bắt đầu';
}

function updateStopwatchDisplay() {
    const totalSeconds = Math.floor(stopwatchTime / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor((stopwatchTime % 1000) / 10);
    
    const timeStr = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    const msStr = String(milliseconds).padStart(2, '0');
    
    document.getElementById('stopwatchDisplay').textContent = timeStr;
    document.getElementById('millisecondsDisplay').textContent = msStr;
}

function saveWorkoutTime() {
    if (stopwatchTime === 0) {
        showToast('Thời gian phải lớn hơn 0.', 'error');
        return;
    }
    
    const now = new Date();
    const session = {
        id: Date.now(),
        duration: stopwatchTime,
        date: now.toISOString(),
        dateDisplay: now.toLocaleString('vi-VN')
    };
    
    stopwatchHistory.unshift(session);
    saveStopwatchHistory();
    void syncStopwatchSession(session);
    updateStopwatchHistory();
    
    resetStopwatch();
    
    showToast('Đã lưu phiên tập.', 'success');
}

function loadStopwatchHistory() {
    const saved = localStorage.getItem('stopwatchHistory');
    return saved ? JSON.parse(saved) : [];
}

function saveStopwatchHistory() {
    localStorage.setItem('stopwatchHistory', JSON.stringify(stopwatchHistory));
}

function updateStopwatchHistory() {
    const totalTime = stopwatchHistory.reduce((sum, session) => sum + session.duration, 0);
    const totalMinutes = Math.floor(totalTime / 60000);
    const totalSessions = stopwatchHistory.length;
    const avgTime = totalSessions > 0 ? Math.floor(totalMinutes / totalSessions) : 0;
    
    document.getElementById('totalWorkoutTime').textContent = `${totalMinutes} phút`;
    document.getElementById('totalSessions').textContent = totalSessions;
    document.getElementById('avgSessionTime').textContent = `${avgTime} phút`;
    
    renderHistoryList();
}

function renderHistoryList(filter = 'all') {
    const historyList = document.getElementById('historyList');
    let filteredHistory = stopwatchHistory;
    
    if (filter === 'today') {
        const today = new Date().toDateString();
        filteredHistory = stopwatchHistory.filter(s => new Date(s.date).toDateString() === today);
    } else if (filter === 'week') {
        const weekAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
        filteredHistory = stopwatchHistory.filter(s => new Date(s.date).getTime() > weekAgo);
    } else if (filter === 'month') {
        const monthAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);
        filteredHistory = stopwatchHistory.filter(s => new Date(s.date).getTime() > monthAgo);
    }
    
    if (filteredHistory.length === 0) {
        historyList.innerHTML = `
            <div class="empty-state">
                <span class="empty-icon">⏱️</span>
                <p>Không có phiên tập nào</p>
            </div>
        `;
        return;
    }
    
    historyList.innerHTML = filteredHistory.map(session => {
        const totalSeconds = Math.floor(session.duration / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        const timeStr = hours > 0 
            ? `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
            : `${minutes}:${String(seconds).padStart(2, '0')}`;
        
        const durationText = hours > 0 
            ? `${hours}h ${minutes}m`
            : `${minutes} phút`;
        
        return `
            <div class="history-item">
                <div class="history-item-left">
                    <div class="history-time">${timeStr}</div>
                    <div class="history-date">${session.dateDisplay}</div>
                </div>
                <div class="history-item-right">
                    <span class="history-duration">${durationText}</span>
                    <button class="delete-history-btn" onclick="deleteHistoryItem(${session.id})" title="Xóa">
                        🗑️
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function filterHistory(filter, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => {
        b.classList.remove('active');
    });
    if (btn) btn.classList.add('active');
    
    renderHistoryList(filter);
}

function deleteHistoryItem(id) {
    showConfirm({
        title: 'Xóa phiên tập?',
        message: 'Thời gian buổi tập này sẽ bị xoá',
        confirmLabel: 'Xóa phiên',
        danger: true,
        passwordAction: 'delete',
        submitOnEnter: true,
        onConfirm: () => {
        const removedSession = stopwatchHistory.find(s => String(s.id) === String(id));
        stopwatchHistory = stopwatchHistory.filter(s => String(s.id) !== String(id));
        saveStopwatchHistory();
        updateStopwatchHistory();
        if (removedSession && getCloudAccessToken()) {
            cloudRequest(`/data/stopwatch-session/${encodeURIComponent(removedSession.id)}`, { method: 'DELETE' })
                .catch(() => {});
        }
        showToast('Đã xóa phiên tập.', 'success');
        }
    });
}

function showToast(message, type = 'success') {
    const region = document.getElementById('toastRegion');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    region.appendChild(toast);
    window.setTimeout(() => toast.remove(), 3200);
}

function setupConfirmDialog() {
    const dialog = document.getElementById('confirmDialog');
    const cancel = document.getElementById('confirmCancel');
    cancel.addEventListener('click', () => {
        dialog.hidden = true;
        document.getElementById('confirmFields').replaceChildren();
    });
}

function showConfirm({ title, message, confirmLabel = 'Xác nhận', danger = false, passwordAction = null, submitOnEnter = false, onConfirm }) {
    const dialog = document.getElementById('confirmDialog');
    const accept = document.getElementById('confirmAccept');
    const fields = document.getElementById('confirmFields');
    document.getElementById('confirmTitle').textContent = title;
    document.getElementById('confirmMessage').textContent = message;
    accept.textContent = confirmLabel;
    accept.classList.toggle('danger-btn', danger);
    accept.classList.toggle('primary-btn', !danger);
    fields.replaceChildren();

    let passwordInput = null;
    let passwordError = null;

    if (passwordAction) {
        passwordInput = document.createElement('input');
        passwordInput.className = 'password-input';
        passwordInput.type = 'password';
        passwordInput.autocomplete = 'current-password';
        passwordInput.placeholder = 'Nhập mật khẩu';
        passwordInput.setAttribute('aria-label', 'Mật khẩu');
        fields.appendChild(passwordInput);

        passwordError = document.createElement('p');
        passwordError.className = 'password-error';
        passwordError.setAttribute('aria-live', 'polite');
        fields.appendChild(passwordError);
    }

    accept.onclick = async () => {
        const password = passwordInput?.value || '';

        if (passwordAction && !(await verifyWorkerPassword(passwordAction, password))) {
            passwordError.textContent = 'Mật khẩu không đúng';
            passwordInput.select();
            return;
        }

        accept.disabled = true;
        try {
            await onConfirm(password);
            dialog.hidden = true;
            fields.replaceChildren();
        } finally {
            accept.disabled = false;
        }
    };
    if (passwordInput && submitOnEnter) {
        passwordInput.addEventListener('keydown', event => {
            if (event.key === 'Enter') {
                event.preventDefault();
                accept.click();
            }
        });
    }
    dialog.hidden = false;
    (passwordInput || accept).focus();
}

async function verifyWorkerPassword(action, password) {
    if (!password) return false;
    try {
        const response = await fetch(`${WORKER_API_URL}/verify`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action, password })
        });
        const result = await response.json();
        if (response.ok && result.ok === true && action === 'unlock' && result.token) {
            sessionStorage.setItem(CLOUD_ACCESS_TOKEN_KEY, result.token);
        }
        return response.ok && result.ok === true;
    } catch {
        return false;
    }
}

function requestAppLock() {
    showConfirm({
        title: 'Khóa trang?',
        message: 'Nhập mật khẩu khóa trang đã lưu trên Cloudflare.',
        confirmLabel: 'Khóa trang',
        passwordAction: 'lock',
        onConfirm: () => {
            lockApplication();
            showToast('Trang đã được khóa.', 'success');
        }
    });
}

function lockApplication() {
    sessionStorage.setItem(APP_LOCKED_SESSION_KEY, '1');
    redirectToLockScreen();
}

function updateAppLockSettings() {
    const button = document.getElementById('lockSettingsButton');
    const status = document.getElementById('lockSettingsStatus');
    const description = document.getElementById('lockSettingsDescription');
    if (!button || !status || !description) return;

    button.textContent = 'Khóa trang';
    status.textContent = 'Cloudflare bảo vệ';
    status.classList.remove('muted');
    description.textContent = 'Trang và thao tác xóa dữ liệu sẽ yêu cầu mật khẩu trên Cloudflare.';
}

function setupAppLock() {
    updateAppLockSettings();
    localStorage.removeItem('gymTrackerPasscodeV1');
}

function setupBrandReload() {
    document.getElementById('brandHome').addEventListener('click', () => {
        const pageHash = window.location.hash;
        window.location.assign(`${window.location.pathname}?reload=${Date.now()}${pageHash}`);
    });
}

function setupThemeSettings() {
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;

    toggle.addEventListener('click', () => {
        const nextTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('gymTrackerTheme', nextTheme);
        applyTheme(nextTheme);
        showToast('Đã cập nhật giao diện.', 'success');
    });
}

function applySavedTheme() {
    applyTheme(localStorage.getItem('gymTrackerTheme') || 'system');
}

function applyTheme(choice) {
    const isDark = choice === 'dark' || (choice === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    document.body.dataset.theme = isDark ? 'dark' : 'light';
    const logoSource = isDark ? 'images/logo/logolight-clean.png' : 'images/logo/logodark-clean.png';
    document.querySelectorAll('.brand-logo, .footer-logo').forEach((logo) => {
        logo.src = logoSource;
    });
    const toggle = document.getElementById('themeToggle');
    const label = document.getElementById('themeSwitcherLabel');
    const description = document.getElementById('themeSwitcherDescription');
    if (!toggle) return;

    toggle.classList.toggle('is-light', !isDark);
    toggle.setAttribute('aria-checked', String(isDark));
    if (label) label.textContent = isDark ? 'Chế độ tối' : 'Chế độ sáng';
    if (description) description.textContent = isDark ? 'Dễ nhìn hơn khi tập luyện ban đêm' : 'Sáng rõ hơn khi sử dụng ban ngày';
}

// Make functions globally accessible
window.toggleDayComplete = toggleDayComplete;
window.toggleExerciseComplete = toggleExerciseComplete;
window.toggleAllExercises = toggleAllExercises;
window.openExerciseDetail = openExerciseDetail;
window.saveExerciseNotes = saveExerciseNotes;
window.exportData = exportData;
window.importData = importData;
window.clearAllData = clearAllData;
window.requestAppLock = requestAppLock;
window.startStopwatch = startStopwatch;
window.pauseStopwatch = pauseStopwatch;
window.resetStopwatch = resetStopwatch;
window.saveWorkoutTime = saveWorkoutTime;
window.filterHistory = filterHistory;
window.deleteHistoryItem = deleteHistoryItem;
window.selectWorkoutDay = selectWorkoutDay;
window.exportWeeklyReport = exportWeeklyReport;
